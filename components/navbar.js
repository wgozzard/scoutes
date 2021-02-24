import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { selectCurrentUser } from '../redux/user/user.selector';
import { setUserState } from '../redux/user/user.actions';
import { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { auth, createUserindatabase } from '../firebase/firebase-config';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  mobilemenu: {
    width: 140,
    height: '40vh',
    position: 'absolute',
    top: 56,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      display: 'none',
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
}));
const Navbar = ({ currentUser, setUserState }) => {
  let unsubscribeFromAuth = null;
  const classes = useStyles();
  const [menuopen, setMenuopen] = useState(false);
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userauth => {
      if (userauth) {
        const userRef = await createUserindatabase(userauth);

        userRef.onSnapshot(snapshot => {
          setUserState({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setUserState(userauth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setUserState]);

  const steless = menuopen ? { display: 'block' } : { display: 'none' };
  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={() => setMenuopen(!menuopen)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button className={classes.desktopmenu} color="inherit">
            <Link href="/signin">
              <a>Home</a>
            </Link>
          </Button>

          <Button className={classes.desktopmenu} color="inherit">
            {currentUser ? (
              <a onClick={() => auth.signOut()}>Sign Out </a>
            ) : (
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            )}
          </Button>
          <Button className={classes.desktopmenu} color="inherit">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Button>
        </Toolbar>
        <div className={classes.mobilemenu} style={steless}>
          <div className={classes.mobilemenuclose} onClick={() => setMenuopen(!menuopen)}>
            X
          </div>
          <Button className={classes.mobilemenuitem} color="inherit">
            <Link href="/signin">
              <a>Home</a>
            </Link>
          </Button>

          <Button className={classes.mobilemenuitem} color="inherit">
            {currentUser ? (
              <p onClick={() => auth.signOut()}>Sign Out </p>
            ) : (
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            )}
          </Button>
          <Button className={classes.mobilemenuitem} color="inherit">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Button>
        </div>
      </AppBar>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setUserState: user => dispatch(setUserState(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
