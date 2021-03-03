import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { AddCircle, Delete } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { firestore } from '../../firebase/firebase-config';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: 500,
    flexWrap: 'wrap',
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
    margin: '20px auto',
    width: 560,
    height: 315,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      width: 330,
      height: 185,
    },
  },
  addvideo: {
    width: 560,
    height: 345,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '20px auto',

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
  inputbox: {
    width: '90%',
  },
  delete: {
    cursor: 'pointer',
  },
}));

const Videos = ({ profile, uid, user }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  const handleSave = () => {
    const videoRef = firestore.doc(`profiles/${uid}`);
    const videoid = videoLink.split('/');
    console.log(videoid);
    try {
      videoRef
        .update({
          youtubevideo: firebase.firestore.FieldValue.arrayUnion(
            `https://www.youtube.com/embed/${videoid[videoid.length - 1]}`,
          ),
        })
        .then(data => {
          handleClose();
          setVideoLink('');
          location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = video => {
    const videoRef = firestore.doc(`profiles/${uid}`);

    try {
      videoRef
        .update({
          youtubevideo: firebase.firestore.FieldValue.arrayRemove(video),
        })
        .then(() => {
          location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography variant="h3" gutterBottom component="div" className={classes.heading}>
        JOHN SMITH VIDEOS
      </Typography>
      <div className={classes.root}>
        {profile.youtubevideo.length
          ? profile.youtubevideo.map((video, i) => {
              return (
                <div key={i} className={classes.media}>
                  {user && <Delete onClick={() => handleDelete(video)} className={classes.delete} fontSize="default" />}
                  <iframe
                    width="100%"
                    height="100%"
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })
          : !user && <h1>No Videos To Show</h1>}
        {user && (
          <>
            {profile.youtubevideo.length <= 5 && (
              <div className={classes.addvideo}>
                {modalOpen ? (
                  <div className={classes.inputbox}>
                    <h2 style={{ color: '#e60e0e' }}> Enter Your Youtube Video Link</h2>
                    <TextField
                      placeholder="youtube link only"
                      margin="dense"
                      fullWidth
                      value={videoLink}
                      onChange={e => setVideoLink(e.target.value)}
                      required
                      type="text"
                      variant="standard"
                      color="secondary"
                    />
                    <div style={{ justifySelf: 'flex-end' }}>
                      <Button onClick={() => handleSave()} color="secondary" variant="contained">
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div onClick={() => handleOpen()}>
                    <AddCircle fontSize="large" color="secondary" />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Videos);
