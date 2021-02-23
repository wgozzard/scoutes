import { makeStyles, Paper } from '@material-ui/core';
import OverviewCard from '../overViewcard/overviewCard';
import ProfileCard from '../profileCard/profileCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100vw',
    overflow: 'auto',
    justifyContent: 'space-around',

    backgroundColor: 'bisque',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 30,
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
const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProfileCard />
      <OverviewCard />
    </div>
  );
};

export default Hero;
