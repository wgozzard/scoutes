import { makeStyles, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '30vw',
    color: 'white',
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
    backgroundColor: '#e60e0e',
    color: 'white',
  },
}));

const ProfileCard = ({ profile }) => {
  const classes = useStyles();
  const {
    fullName,
    school,
    grade,
    gpa,
    sat,
    profilePic,
    Height,
    Weight,
    Throws,
    Bats,
    Birthdate,
    Bench,
    Squat,
  } = profile;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={4}>
        <img className={classes.media} src={profilePic} />
        <Typography variant="h4" component="h2" gutterBottom className={classes.name}>
          {fullName}
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`School - ${school}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Grade - ${grade}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`GPA -${gpa}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`SAT - ${sat}`}
        </Typography>

        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Height - ${Height}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Weight - ${Weight}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Throws - ${Throws}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {` Bats - ${Bats}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Birthdate - ${Birthdate}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {` Bench - ${Bench}`}
        </Typography>
        <Typography className={classes.meta} variant="subtitle1" component="h2" className={classes.bio}>
          {`Squat - ${Squat}`}
        </Typography>
      </Paper>
    </div>
  );
};

export default ProfileCard;
