import { makeStyles, Paper } from '@material-ui/core';

import Hero from '../../components/hero/hero';
import SocialCard from '../../components/socialsection/socialIcons';
import Video from '../../components/videosection/videoSection';

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
}));
const Profile = ({ uid }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero uid={uid} />
      <Video uid={uid} />
      <SocialCard />
    </div>
  );
};
Profile.getInitialProps = ({ query }) => {
  const { id } = query;
  return { uid: id };
};
export default Profile;
