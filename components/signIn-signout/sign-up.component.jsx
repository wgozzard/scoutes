import React, { Component } from 'react';

import { auth, createUserindatabase } from '../../firebase/firebase-config';
import { Button, TextField } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { fullName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Password did not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserindatabase(user, fullName);
      this.setState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = (name, e) => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { fullName, email, password, confirmPassword } = this.state;
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
            <p>or Sign Up with your information ! </p>

            <form onSubmit={this.handleSubmit} className="signup-form">
              <TextField
                placeholder="Enter Your Full Name"
                label="Full Name"
                onChange={e => this.handleChange('fullName', e)}
                defaultValue={fullName}
                margin="dense"
                type="text"
                required
                fullWidth
                variant="outlined"
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={e => this.handleChange('email', e)}
                defaultValue={email}
                margin="dense"
                type="email"
                fullWidth
                required
                variant="outlined"
              />
              <br />
              <TextField
                placeholder="Enter Your Password"
                label="Password"
                onChange={e => this.handleChange('password', e)}
                defaultValue={password}
                margin="dense"
                type="password"
                fullWidth
                required
                variant="outlined"
              />
              <br />
              <TextField
                placeholder="Confirm Your Password"
                label="Confirm Password"
                onChange={e => this.handleChange('confirmPassword', e)}
                defaultValue={confirmPassword}
                margin="dense"
                type="password"
                fullWidth
                required
                variant="outlined"
              />
              <br />

              <Button color="primary" variant="outlined" type="submit">
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Signup;
