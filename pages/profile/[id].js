import { makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Hero from '../../components/hero/hero';
import SocialCard from '../../components/socialsection/socialIcons';
import Video from '../../components/videosection/videoSection';
import { firestore } from '../../firebase/firebase-config';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 10,
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
const Profile = ({ uid, profile }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {profile ? (
        <>
          <Hero profile={profile} uid={uid} />
          <Video profile={profile} uid={uid} />
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

  if (snapshot.exists) {
    profile = snapshot.data();
  }
  return { uid: id, profile: profile };
};
export default Profile;
