import { makeStyles, Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {},
  },
  main2: {
    width: ' 100%',
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: ' flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#e60e0e',
    backgroundColor: 'white',
  },
  main: {
    width: ' 100%',
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: ' flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#e60e0e',
  },
  discptn: {
    width: '420px',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      width: '330px',
      fontSize: '0.875em',
    },
  },
  emptyprofile: {
    width: '100%',
    height: '65vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },

  button: {
    marginTop: 30,
    fontSize: '2em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>HOME </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.main2}>
        <Typography className={classes.heading} align="center" variant="h3" gutterBottom>
          Simplify Submissions to
          <br /> College Coaches
          <br /> for free!
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom gutterBottom>
          Today, student-athletes have an incredible opportunity to take advantage of various internet tools that can
          aid in their college recruiting process. It's also important that the student-athlete submit clear, concise
          and easy to obtain information to prospective recruiters and coaches. 
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom gutterBottom>
          Please scroll below to see a sample profile and instructions on how to upload your video(s) from YouTube!
        </Typography>
        <Link href="/signin">
          <a>
            <Button className={classes.button} color="secondary" variant="contained">
              signup now !
            </Button>
          </a>
        </Link>
        <p>
          Please watch our video tutorial here
          <Link href="https://vimeo.com/521513021">
            <a target="_blank">(https://vimeo.com/521513021)</a>
          </Link>
        </p>
      </div>

      <div className={classes.main}>
        <Typography className={classes.heading} align="center" variant="h2" gutterBottom>
          Easy to share
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom>
          Once you have a ScoutsProfile, you will be able to send one link to recruiters and coaches that compile all
          your information in one place for free!  For example, Dear Recruiter, please take a look at my{' '}
          profile - scoutsprofile.com/profile/TNwOJVTgWwbV4K849BSYCbfCChI2 (copy and past this into a browser for a profile
          example.)
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom>
          Profiles will remain private and only those you share your link with will be able to access the profile.
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom>
          How to load a video? You will need to host your video(s) at YouTube for now. When your video is online
          click the SHARE button next to the thumbs up/thumbs down icons and copy and paste that link into the
          add video box.
        </Typography>
        <Typography className={classes.discptn} align="center" variant="subtitle1" gutterBottom>
         For questions or inquiries, please email scoutsprofile@protonmail.com
        </Typography>
      </div>
    </div>
  );
}
