import React from 'react';
import { makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3em',
    fontFamily: 'roboto',
    fontWeight: '300',
  },
  formcontainer: {
    width: '40vw',
    minHeight: '90vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
}));
function FormProfileDetails(props) {
  const classes = useStyles();
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
      <div className={classes.root}>
        <form className={classes.formcontainer}>
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
            placeholder=""
            label="Right/Left Hand"
            onChange={e => handleChange('Throws', e)}
            value={values.Trows}
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
          <TextareaAutosize
            variant="standard"
            value={values.Bench}
            onChange={e => handleChange('Bench', e)}
            rowsMin={4}
            placeholder="Share weight lifting, fitness stats, records held here (optional i.e. 40 yd dash - 4.4)"
            style={{ fontSize: '1em', fontFamily: 'roboto', fontWeight: '300', padding: '10px' }}
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
