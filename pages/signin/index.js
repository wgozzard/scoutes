import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import SignIn from '../../components/signIn-signout/sign-in.component';
import Signup from '../../components/signIn-signout/sign-up.component';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3em',
    fontFamily: 'roboto',
    fontWeight: '300',
    backgroundColor: 'white',
  },
}));
const Signin = props => {
  const classes = useStyles();

  const [signup, setSignup] = useState(false);
  return (
    <div className={classes.root}>{signup ? <Signup setSignup={setSignup} /> : <SignIn setSignup={setSignup} />}</div>
  );
};

export default Signin;
