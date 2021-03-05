import React, { Component, useEffect, useRef, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddAPhoto';
import { storageRef } from '../firebase/firebase-config';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 50,
    fontSize: '1.3em',
    fontFamily: 'roboto',
    fontWeight: '300',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 15,
      height: '150vh',
      alignItems: 'center',
    },
  },
  mediaUploaded: {
    width: 330,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    [theme.breakpoints.down('sm')]: {
      height: 60,
    },
  },
  media: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: 'bisque',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 40,
    },
  },

  mediaUploaded: {
    width: 300,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  formcontainer: {
    width: '40vw',
    height: '90vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },

  close: {
    width: 200,
    height: 30,
    display: 'flex',
    paddingLeft: 20,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
    },
  },
}));
const FormUserDetails = props => {
  const classes = useStyles();
  const [UserImage, setUserImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [uploadProgres, setUploadProgres] = useState();
  const imageRef = useRef();
  const onButtonClick = () => {
    imageRef.current.click();
  };
  const handleChang = event => {
    const file = event.target.files[0];
    if (file.size <= 100000) {
      setSelectedFile(file);
    } else {
      alert('Image size must be 100kb or less  ');
    }
  };
  const continu = e => {
    e.preventDefault();
    props.nextStep();
  };
  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);
  const handleupload = async () => {
    const imageReff = storageRef.child(`photos/${props.uid}`);
    const uploadTask = await imageReff.put(selectedFile).on(
      'state_changed',
      function (snapshot) {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgres(progress);
        if (progress === 100) {
          const url = imageReff.getDownloadURL().then(url => {
            props.handleurl(url);
          });
        }
      },
      error => alert({ error: error.message }),
    );
  };

  const { values, handleChange } = props;
  return (
    <MuiThemeProvider>
      <div className={classes.root}>
        <div className={classes.mediacontainer}>
          <p style={{ textAlign: 'center' }}>Image must be 1:1 and max 100kb</p>
          {selectedFile ? (
            <>
              {uploadProgres ? (
                <div className={classes.mediaUploaded}>
                  {uploadProgres === 100 ? (
                    <p>You’re photo has been uploaded and will format properly on your profile</p>
                  ) : (
                    <CircularProgress variant="determinate" value={uploadProgres} />
                  )}
                </div>
              ) : (
                <>
                  <img className={classes.media} src={UserImage} alt="upload a your headshot" />
                  <div className={classes.close}>
                    <Button color="primary" onClick={() => setSelectedFile(null)} variant="outlined">
                      Cancel
                    </Button>
                    <Button onClick={() => handleupload()} color="primary" variant="outlined">
                      Upload
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={classes.media}>
              <Fab onClick={onButtonClick} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </div>
          )}
        </div>
        <form className={classes.formcontainer}>
          <input ref={imageRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={handleChang} />
          <TextField
            placeholder="Enter Your Full Name"
            label="Full Name"
            onChange={e => handleChange('fullName', e)}
            value={values.fullName}
            margin="dense"
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your School Name"
            label="School"
            onChange={e => handleChange('school', e)}
            value={values.school}
            margin="dense"
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Grade"
            label="Grade"
            onChange={e => handleChange('grade', e)}
            value={values.grade}
            margin="dense"
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your GPA"
            label="GPA  (Optional)"
            onChange={e => handleChange('gpa', e)}
            value={values.gpa}
            margin="dense"
            fullWidth
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your SAT"
            label="SAT (Optional)"
            onChange={e => handleChange('sat', e)}
            value={values.sat}
            margin="dense"
            fullWidth
            variant="standard"
            color="secondary"
          />

          <br />
          <Button style={{ alignSelf: 'flex-end' }} color="secondary" variant="contained" onClick={e => continu(e)}>
            Continue
          </Button>
        </form>
      </div>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
