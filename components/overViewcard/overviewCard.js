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
    backgroundColor: '#e60e0e',
    color: 'white',
  },
}));

const OverviewCard = ({ profile }) => {
  const classes = useStyles();
  const { phone, email, overview, coachesnote, stats } = profile;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={4}>
        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Overview:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {overview}
        </Typography>
        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Coaches Note:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {coachesnote}
        </Typography>

        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Contact Info:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {` Email: ${email}`}
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {`Phone: ${phone}`}
        </Typography>

        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          STATS:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {stats}
        </Typography>
      </Paper>
    </div>
  );
};

export default OverviewCard;
