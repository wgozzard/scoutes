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
      fullName,
      email,
      overview,
      school,
      grade,
      gpa,
      sat,
      Bench,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    },
    handleSubmit,
  } = props;

  return (
    <MuiThemeProvider>
      <div
        style={{
          width: '100%',

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
              <ListItemText primary="Full Name" secondary={fullName} />
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
              <ListItemText primary="ETC" secondary={Bench} />
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
              <ListItemText primary="Twitter" secondary={tweeter} />
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
            <Button color="secondary" variant="contained" onClick={e => back(e)}>
              Back
            </Button>

            <Button style={{ marginLeft: '5px' }} color="secondary" variant="contained" onClick={e => continu(e)}>
              Confirm & Continue
            </Button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default Confirm;
