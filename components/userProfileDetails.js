import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

function FormProfileDetails(props) {
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
            placeholder="6'1"
            label="Height"
            onChange={e => handleChange('Height', e)}
            value={values.Height}
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="0"
            label="Weight"
            onChange={e => handleChange('Weight', e)}
            value={values.Weight}
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="R"
            label="Throws"
            onChange={e => handleChange('Throws', e)}
            value={values.Trows}
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="R"
            label="Bats"
            onChange={e => handleChange('Bats', e)}
            value={values.Bats}
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="28-Feb-2000"
            label="Birthdate"
            onChange={e => handleChange('Birthdate', e)}
            value={values.Birthdate}
            fullWidth
            required
            variant="standard"
            color="secondary"
            type="date"
          />
          <br />
          <TextField
            placeholder="280 max"
            label="Bench"
            onChange={e => handleChange('Bench', e)}
            value={values.Bench}
            fullWidth
            required
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="335 max"
            label="Squat"
            onChange={e => handleChange('Squat', e)}
            value={values.Squat}
            fullWidth
            required
            variant="standard"
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

export default FormProfileDetails;
