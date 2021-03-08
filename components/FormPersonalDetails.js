import React from 'react';
import { makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormLabel, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
const FormPersonalDetails = props => {
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
          <FormLabel component="legend">Overview</FormLabel>
          <TextareaAutosize
            variant="standard"
            required
            value={values.overview}
            aria-label="Overview"
            onChange={e => handleChange('overview', e)}
            rowsMin={4}
            placeholder="Enter Your Overview"
            style={{ fontSize: '1em', fontFamily: 'roboto', fontWeight: '300', padding: '10px' }}
          />
          <br />
          <FormLabel component="legend">Stats </FormLabel>
          <TextareaAutosize
            placeholder="G - 52, AB - 72,
            TB - 30,
            2B - 15,
            3B - 5,HR - 12  .Please note: use comma after word or sentence to create new line"
            aria-label="Stats"
            onChange={e => handleChange('stats', e)}
            value={values.stats}
            rowsMin={4}
            variant="standard"
            required
            style={{ fontSize: '1em', fontFamily: 'roboto', fontWeight: '300', padding: '10px' }}
          />
          <br />
          <TextField
            placeholder="Your contact email"
            label="Email"
            onChange={e => handleChange('email', e)}
            value={values.email}
            margin="dense"
            fullWidth
            required
            type="email"
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Your Phone number"
            label="Phone (Optional)"
            onChange={e => handleChange('phone', e)}
            value={values.phone}
            margin="dense"
            fullWidth
            type="tel"
            variant="standard"
            color="secondary"
          />
          <br />
          <FormLabel component="legend">Coaches Note</FormLabel>
          <TextareaAutosize
            placeholder=" Enter Your Coaches Note or leave blank if not available"
            label="Note"
            onChange={e => handleChange('coachesnote', e)}
            value={values.coachesnote}
            margin="dense"
            rowsMin={4}
            variant="standard"
            color="secondary"
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
};

export default FormPersonalDetails;
