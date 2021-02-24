import { makeStyles, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import OverviewCard from '../overViewcard/overviewCard';
import ProfileCard from '../profileCard/profileCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100vw',
    overflow: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    backgroundColor: 'bisque',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 15,
    },
  },
  media: {
    width: 200,
    paddingTop: '5%',
    borderRadius: '50%',
  },
  paper: {
    width: '100%',
    height: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  pp: {
    textAlign: 'center',
  },
}));
const Hero = ({ user }) => {
  const classes = useStyles();
  const dispaly = user ? { display: 'block' } : { display: 'none' };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={dispaly}>
        <p className={classes.pp}>Edit Profile</p>
      </Paper>
      <ProfileCard />
      <OverviewCard />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Hero);
