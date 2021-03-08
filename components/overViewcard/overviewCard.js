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
  const { Bench, overview, coachesnote, stats } = profile;
  const splited = Bench.split(',');
const splitedStats = stats.split(',');
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={4}>
        <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
          Overview:
        </Typography>
        <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
          {overview}
        </Typography>
        {coachesnote.length > 0 && (
          <>
            <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
              Coaches Note:
            </Typography>

            <Typography gutterBottom className={classes.meta} variant="subtitle1" component="h2">
              {coachesnote}
            </Typography>
          </>
        )}

        {stats.length > 0 && (
          <>
            <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
              Stats:
            </Typography>
            <>
              {splitedStats.map((sta, i) => {
                return (
                  <Typography
                    key={i}
                    className={classes.meta}
                    variant="subtitle1"
                    component="h2"
                    className={classes.bio}
                  >
                    {sta}
                  </Typography>
                );
              })}
            </>
          </>
        )}
        {Bench.length > 0 && (
          <>
            <Typography variant="h5" gutterBottom component="h2" className={classes.heading}>
              Fitness/Achievements:
            </Typography>
            <>
              {splited.map((stat, i) => {
                return (
                  <Typography
                    key={i}
                    className={classes.meta}
                    variant="subtitle1"
                    component="h2"
                    className={classes.bio}
                  >
                    {stat}
                  </Typography>
                );
              })}
            </>
          </>
        )}
      </Paper>
    </div>
  );
};

export default OverviewCard;
