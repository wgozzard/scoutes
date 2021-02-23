import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { saveProfile } from '../firebase/firebase-config';

export function Confirm(props) {
  const continu = e => {
    e.preventDefault();
    // PROCESS FORM //
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    saveProfile(443555, props.values);
    props.prevStep();
  };

  const {
    values: {
      firstName,
      lastName,
      email,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    },
  } = props;

  return (
    <MuiThemeProvider>
      <div
        style={{
          width: '100%',
          height: '150vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.3em',
          fontFamily: 'roboto',
          fontWeight: '300',
        }}
      >
        <div
          style={{
            width: '40vw',

            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Overview" secondary={overview} />
            </ListItem>
            <ListItem>
              <ListItemText primary="School" secondary={school} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Grade" secondary={grade} />
            </ListItem>
            <ListItem>
              <ListItemText primary="GPA" secondary={gpa} />
            </ListItem>
            <ListItem>
              <ListItemText primary="SAT" secondary={sat} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Coaches note" secondary={coachesnote} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stats" secondary={stats} />;
            </ListItem>
            <ListItem>
              <ListItemText primary="Facebook" secondary={facebook} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tweeter" secondary={tweeter} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instagram" secondary={instagram} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Youtube" secondary={youtube} />
            </ListItem>
          </List>
          <br />
          <div>
            <Button color="secondary" variant="outlined" onClick={e => back(e)}>
              Back
            </Button>

            <Button style={{ marginLeft: '5px' }} color="primary" variant="outlined" onClick={e => continu(e)}>
              Confirm & Continue
            </Button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default Confirm;
