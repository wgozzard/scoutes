import { makeStyles, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: '330px',
    },
  },

  heading: {},
  paper: {
    padding: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));

const OverviewCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={4}>
        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Overview:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          Thanks for checking out my ScoutsProfile. John is a mutlisport athlete focusing on baseball and currently
          attends XYU High School as a senior. He's been playing baseball since he was 4 years old and has a true
          passion for the game. When not of the field, he's spending time working and volunteering for xyz causes.
        </Typography>
        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Coaches Note:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          John has an exciting bat, he's quick to the base and has a strong arm. He's got a great foundation, a true
          team player and would be a great addition to anyone's team!
        </Typography>

        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Contact Info:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          Email: jsmith_02@xyzmail.com
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          Phone: 123-456-7890
        </Typography>

        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          STATS: (list what ever stats you want):
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          G - 52
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          AB - 72
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          AVG - .336 | OBP - .430
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          TB - 30
        </Typography>

        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          2B - 15
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          3B - 5
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          HR - 12
        </Typography>
      </Paper>
    </div>
  );
};

export default OverviewCard;
