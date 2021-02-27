import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#e60e0e',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
  heading: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    backgroundColor: '#e60e0e',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },
  media: {
    marginTop: 20,
    width: 560,
    height: 315,

    [theme.breakpoints.down('sm')]: {
      width: 330,
      height: 185,
    },
  },

  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Videos = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" gutterBottom component="div" className={classes.heading}>
        JOHN SMITH VIDEOS
      </Typography>
      <div className={classes.root}>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4hCjGaw1ApM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IMM3tjqJIGM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/v3m_DlYSJOA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GllrrZc5O80"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qnMxsGeDz90"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gUYyjB0qGGQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Videos;
