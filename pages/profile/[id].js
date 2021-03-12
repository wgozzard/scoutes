import { makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Hero from '../../components/hero/hero';
import SocialCard from '../../components/socialsection/socialIcons';
import Video from '../../components/videosection/videoSection';
import { firestore } from '../../firebase/firebase-config';
import Link from 'next/link';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/user/user.actions';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {},
  },
  media: {
    width: 200,
    paddingTop: '5%',
    borderRadius: '50%',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyprofile: {
    width: '100%',
    height: '65vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
const Profile = ({ uid, user, profile }) => {
  if (uid === null && user.id !== null) {
    return (
      <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        this account does not exists or <div>You have nothing to show</div>
        <Link href={`/editprofile/${user.id}`}>
          <a>
            Edit your profile
            <Edit />
          </a>
        </Link>
      </div>
    );
  }
  if (uid === null) {
    return (
      <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        this account does not exists
      </div>
    );
  }
  const classes = useStyles();
  useEffect(() => {
    if (user) {
      setUserProfile(profile);
    }
  }, []);
  return (
    <div className={classes.root}>
      {profile ? (
        <>
          <Hero profile={profile} uid={uid} />
          <Video user={user} profile={profile} uid={uid} />
          <SocialCard profile={profile} />
        </>
      ) : (
        <div className={classes.emptyprofile}>
          <div>You have nothing to show</div>

          <Link href={`/editprofile/${uid}`}>
            <a>
              Edit your profile
              <Edit />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
Profile.getInitialProps = async ({ query }) => {
  const { id } = query;
  const profileRef = firestore.doc(`profiles/${id}`);
  const snapshot = await profileRef.get();

  let profile;
  let uuid = null;

  if (snapshot.exists) {
    profile = snapshot.data();
    uuid = id;
  }
  return { uid: uuid, profile: profile };
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
