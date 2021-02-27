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

    backgroundColor: 'bisque',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 15,
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
  },
  close: {
    width: 220,
    height: 30,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
function FormUserDetails(props) {
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
    console.log(file.name);
    setSelectedFile(file);
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
  const handleupload = () => {
    const imageReff = storageRef.child(`photos/${props.uid}`);
    const uploadTask = imageReff.put(selectedFile).on(
      'state_changed',
      function (snapshot) {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgres(progress);
      },
      error => alert({ error: error.message }),
    );
  };

  const { values, handleChange } = props;
  return (
    <MuiThemeProvider>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: 50,
          fontSize: '1.3em',
          fontFamily: 'roboto',
          fontWeight: '300',
        }}
      >
        <div>
          <div>Imgage should be 200x200</div>
          {selectedFile ? (
            <>
              {uploadProgres ? (
                <div className={classes.media}>
                  {uploadProgres === 100 ? '100%' : <CircularProgress variant="determinate" value={uploadProgres} />}
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
        <form
          style={{
            width: '40vw',
            height: '90vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input ref={imageRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={handleChang} />
          <TextField
            placeholder="Enter Your Full Name"
            label="Full Name"
            onChange={e => handleChange('fullName', e)}
            defaultValue={values.fullName}
            margin="dense"
            fullWidth
            required
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your School Name"
            label="School"
            onChange={e => handleChange('school', e)}
            defaultValue={values.school}
            margin="dense"
            fullWidth
            required
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Grade"
            label="Grade"
            onChange={e => handleChange('grade', e)}
            defaultValue={values.grade}
            margin="dense"
            fullWidth
            required
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your GPA"
            label="GPA"
            onChange={e => handleChange('gpa', e)}
            defaultValue={values.gpa}
            margin="dense"
            fullWidth
            required
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your SAT"
            label="SAT"
            onChange={e => handleChange('sat', e)}
            defaultValue={values.sat}
            margin="dense"
            fullWidth
            required
            variant="outlined"
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
}

export default FormUserDetails;
