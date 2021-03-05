import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormProfileDetails from './userProfileDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormuserSocial from './FormuserSocial';
import { firestore, saveProfile } from '../firebase/firebase-config';

export class UserForm extends Component {
  state = {
    step: 1,
    profilePic: '',
    fullName: '',
    overview: '',
    Height: '',
    Weight: 0,
    Throws: 'R',
    Bats: 'R',
    Birthdate: '01/01/01',
    Bench: '280 max',
    Squat: '335 max',
    email: '',
    phone: '',
    overview: '',
    school: '',
    grade: '',
    gpa: '',
    sat: '',
    cochenote: '',
    stats: '',
    facebook: '',
    tweeter: '',
    instagram: '',
    youtube: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleurl = url => {
    this.setState({ profilePic: url });
  };
  // Handle fields change
  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };
  handleSubmit = () => {
    const {
      fullName,
      profilePic,
      Height,
      Weight,
      Throws,
      Bats,
      Birthdate,
      Bench,
      Squat,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    } = this.state;
    const values = {
      fullName,
      profilePic,
      Height,
      Weight,
      Throws,
      Bats,
      Birthdate,
      Bench,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    };
    saveProfile(this.props.uid, values);
  };
  async componentDidMount() {
    const profileRef = firestore.doc(`profiles/${this.props.uid}`);
    const snapshot = await profileRef.get();

    if (snapshot.exists) {
      const profile = snapshot.data();
      this.setState({ ...profile });
    }
  }
  render() {
    const { step } = this.state;
    const {
      fullName,
      profilePic,
      Height,
      Weight,
      Throws,
      Bats,
      Birthdate,
      Bench,

      school,
      grade,
      gpa,
      sat,
      email,
      phone,
      overview,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    } = this.state;
    const values = {
      fullName,
      profilePic,
      Height,
      Weight,
      Throws,
      Bats,
      Birthdate,
      Bench,

      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            uid={this.props.uid}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleurl={this.handleurl}
          />
        );
      case 2:
        return (
          <FormProfileDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FormuserSocial
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm nextStep={this.nextStep} prevStep={this.prevStep} handleSubmit={this.handleSubmit} values={values} />
        );
      case 6: {
        this.handleSubmit();
        return <Success id={this.props.uid} />;
      }

      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default UserForm;
