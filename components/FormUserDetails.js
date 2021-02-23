import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';

function FormUserDetails(props) {
  const continu = e => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;
  return (
    <MuiThemeProvider>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.3em',
          fontFamily: 'roboto',
          fontWeight: '300',
        }}
      >
        <form
          style={{
            width: '40vw',
            height: '90vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextareaAutosize
            variant="outlined"
            required
            aria-label="Overview height"
            onChange={e => handleChange('overview', e)}
            rowsMin={4}
            placeholder="Enter Your overviw"
            style={{ fontSize: '1em', fontFamily: 'roboto', fontWeight: '300', padding: '10px' }}
          />
          <br />
          <Button style={{ alignSelf: 'flex-end' }} color="primary" variant="outlined" onClick={e => continu(e)}>
            Continue
          </Button>
        </form>
      </div>
    </MuiThemeProvider>
  );
}

export default FormUserDetails;
