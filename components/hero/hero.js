import { makeStyles, Paper } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

import EditIcon from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';
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
  media: {
    width: 200,
    paddingTop: '5%',
    borderRadius: '50%',
  },
  paper: {
    width: '100%',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  pp: {
    textAlign: 'right',
    paddingRight: 50,
  },
}));
const Hero = ({ uid, user }) => {
  const classes = useStyles();
  const dispaly = user ? { display: 'block' } : { display: 'none' };
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div className={classes.paper} style={dispaly}>
        <p onClick={() => router.push(`/editprofile/${uid}`)} className={classes.pp}>
          <Fab size="small" color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </p>
      </div>
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
