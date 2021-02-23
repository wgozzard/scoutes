import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { auth, signInWithGoogle } from '../../firebase/firebase-config';
import { TextField } from '@material-ui/core';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (name, e) => {
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div
          style={{
            maxWidth: '500px',
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
            <form onSubmit={this.handleSubmit}>
              <p>Enter Your email and password or SignIn with google.</p>
              <TextField
                placeholder="Enter Your Email"
                onChange={e => this.handleChange('email', e)}
                label="Email"
                type="email"
                value={this.state.email}
                fullWidth
                margin="dense"
                required
                variant="outlined"
                name="email"
              />
              <TextField
                placeholder="Enter Your Password"
                label="Password"
                onChange={e => this.handleChange('password', e)}
                defaultValue={this.state.password}
                margin="dense"
                type="password"
                fullWidth
                required
                variant="outlined"
              />
              <div className="buttons">
                <Button color="secondary" variant="outlined" type="submit">
                  SIGN IN
                </Button>
                <Button
                  color="primary"
                  style={{ marginLeft: '5px' }}
                  variant="outlined"
                  isSignedIn
                  onClick={signInWithGoogle}
                >
                  SIGN IN WITH GOOGLE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SignIn;
