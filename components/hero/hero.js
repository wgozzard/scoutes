import { makeStyles, Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import OverviewCard from '../overViewcard/overviewCard';
import ProfileCard from '../profileCard/profileCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 15,
    },
  },
}));
const Hero = ({ profile }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileCard profile={profile} />
      <OverviewCard profile={profile} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Hero);
