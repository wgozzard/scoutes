import React from 'react';
import { makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

function FormuserSocial(props) {
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
            placeholder="Enter Your Facebook Profile Link (Skipable)"
            label="Facebook"
            onChange={e => handleChange('facebook', e)}
            value={values.facebook}
            margin="dense"
            fullWidth
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Twitter Profile Link (Skipable)"
            label="Twitter"
            onChange={e => handleChange('tweeter', e)}
            value={values.tweeter}
            margin="dense"
            fullWidth
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Instagram Profile Link (Skipable)"
            label="Instagram"
            onChange={e => handleChange('instagram', e)}
            value={values.instagram}
            margin="dense"
            fullWidth
            variant="standard"
            color="secondary"
          />
          <br />
          <TextField
            placeholder="Enter Your Youtube chanel Link (Skipable)"
            label="Youtube"
            onChange={e => handleChange('youtube', e)}
            value={values.youtube}
            margin="dense"
            fullWidth
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
export default FormuserSocial;
