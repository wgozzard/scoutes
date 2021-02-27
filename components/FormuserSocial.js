import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormuserSocial(props) {
  const continu = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
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
          <TextField
            placeholder="Enter Your Facebook Profile Link (Skipable)"
            label="Facebook"
            onChange={e => handleChange('facebook', e)}
            defaultValue={values.facebook}
            margin="dense"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Tweeter Profile Link (Skipable)"
            label="Tweeter"
            onChange={e => handleChange('tweeter', e)}
            defaultValue={values.tweeter}
            margin="dense"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Instagram Profile Link (Skipable)"
            label="Instagram"
            onChange={e => handleChange('instagram', e)}
            defaultValue={values.instagram}
            margin="dense"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Youtube chanel Link (Skipable)"
            label="Youtube"
            onChange={e => handleChange('youtube', e)}
            defaultValue={values.youtube}
            margin="dense"
            fullWidth
            variant="outlined"
            color="secondary"
          />
          <br />

          <div style={{ alignSelf: 'flex-end' }}>
            <Button color="secondary" variant="contained" onClick={e => back(e)}>
              Back
            </Button>

            <Button style={{ marginLeft: '5px' }} color="secondary" variant="contained" onClick={e => continu(e)}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
}
export default FormuserSocial;
