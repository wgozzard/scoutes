import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { setUserState } from '../redux/user/user.actions';
import { setUserProfile } from '../redux/profile/profile.actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { auth, createUserindatabase, firestore } from '../firebase/firebase-config';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.down('sm')]: {},
  },
  mobilemenu: {
    width: 140,
    height: '40vh',
    position: 'absolute',
    top: 56,
    left: '89%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'red',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    [theme.breakpoints.down('sm')]: {
      left: '61%',
    },
  },
  mobilemenuitem: {
    width: '100%',
  },
  desktopmenu: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobilemenuclose: {
    width: '20px',
    float: 'right',
    padding: 5,
    margin: 5,
    cursor: 'pointer',
  },
  menu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
  },
}));
const Navbar = ({ currentUser, profile, setUserState, setUserProfile }) => {
  let unsubscribeFromAuth = null;
  const classes = useStyles();
  const [menuopen, setMenuopen] = useState(false);

  const handleProfile = id => {
    const profileRef = firestore.doc(`profiles/${id}`);
    profileRef.get().then(snapshot2 => {
      if (snapshot2.exists) {
        setUserProfile(snapshot2.data());
      }
    });
  };
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userauth => {
      if (userauth) {
        const userRef = await createUserindatabase(userauth);

        userRef.onSnapshot(snapshot => {
          handleProfile(snapshot.id);
          setUserState({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setUserState(userauth);
      setUserProfile(null);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setUserState, setUserProfile]);

  const dispaly = currentUser ? { display: 'block' } : { display: 'none' };
  const steless = menuopen ? { display: 'block' } : { display: 'none' };
  const pic = profile ? profile.profilePic : null;
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="fixed">
        <div className={classes.menu}>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <img style={{ width: '100%' }} src="/logo-white.svg" />
              </a>
            </Link>
          </div>

          <IconButton onClick={() => setMenuopen(!menuopen)}>
            <Avatar src={pic} />
          </IconButton>
        </div>
        <div className={classes.mobilemenu} style={steless}>
          <div className={classes.mobilemenuclose} onClick={() => setMenuopen(!menuopen)}>
            X
          </div>

          <Button className={classes.mobilemenuitem} color="inherit">
            {currentUser ? (
              <a onClick={() => auth.signOut()}>Sign Out </a>
            ) : (
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            )}
          </Button>
          {currentUser && (
            <>
              <Button className={classes.mobilemenuitem} color="inherit">
                <div style={dispaly}>
                  <Link href={`/profile/${currentUser.id}`}>
                    <a>PROFILE</a>
                  </Link>
                </div>
              </Button>
              <Button className={classes.mobilemenuitem} color="inherit">
                <div style={dispaly}>
                  <Link href={`/editprofile/${currentUser.id}`}>
                    <a>EDIT PROFILE</a>
                  </Link>
                </div>
              </Button>
            </>
          )}
        </div>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    profile: state.profile.profile,
  };
};

const mapDispatchToProps = dispatch => ({
  setUserState: user => dispatch(setUserState(user)),
  setUserProfile: userdata => dispatch(setUserProfile(userdata)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
