import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function FormPersonalDetails(props) {
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
            placeholder="Enter Your School Name"
            label="School"
            onChange={e => handleChange('school', e)}
            defaultValue={values.school}
            margin="dense"
            fullWidth
            required
            variant="outlined"
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
          />
          <br />
          <TextField
            placeholder="G - 52, AB - 72,
            TB - 30,
            2B - 15,
            3B - 5,HR - 12"
            label="Stats"
            onChange={e => handleChange('stats', e)}
            defaultValue={values.stats}
            margin="dense"
            fullWidth
            required
            variant="outlined"
          />
          <br />
          <TextField
            placeholder="Enter Your Coaches Note"
            label="Note"
            onChange={e => handleChange('coachesnote', e)}
            defaultValue={values.coachesnote}
            margin="dense"
            fullWidth
            required
            variant="outlined"
          />
          <br />
          <div style={{ alignSelf: 'flex-end' }}>
            <Button variant="outlined" color="secondary" onClick={e => back(e)}>
              Back
            </Button>

            <Button style={{ marginLeft: '5px' }} color="primary" variant="outlined" onClick={e => continu(e)}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
}

export default FormPersonalDetails;
