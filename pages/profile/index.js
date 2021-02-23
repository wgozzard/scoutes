import { makeStyles, Paper } from '@material-ui/core';

import Hero from '../../components/hero/hero';
import Video from '../../components/videosection/videoSection';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
    paddingTop: 50,
    backgroundColor: 'bisque',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
    },
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
const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Video />
    </div>
  );
};

export default Profile;
