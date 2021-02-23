import { makeStyles, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '30vw',

    [theme.breakpoints.down('sm')]: {
      width: '330px',
      marginBottom: 30,
    },
  },
  media: {
    width: 200,
    alignSelf: 'center',
    borderRadius: '50%',
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
  },
  paper: {
    padding: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));

const ProfileCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={4}>
        <img className={classes.media} src="/profile.jpg" />
        <Typography variant="h4" component="h2" gutterBottom className={classes.name}>
          Md saddam hosen
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          School - XYU High School
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Grade - Senior
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          GPA - 3.5
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          SAT - 1200
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Height - 6'1
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Weight - 195
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Throws - R
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Bats - R
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Birthdate - 01/01/01
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Bench - 280 max
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          Squat - 335 max
        </Typography>
      </Paper>
    </div>
  );
};

export default ProfileCard;
