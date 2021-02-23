import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <h1 style={{ margin: '10px' }}>Thank You For Your Submission</h1>
            <p style={{ margin: '10px' }}>You will get an email with further instructions.</p>
            <Button variant="outlined">Close</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
