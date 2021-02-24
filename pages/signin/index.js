import SignIn from '../../components/signIn-signout/sign-in.component';
import Signup from '../../components/signIn-signout/sign-up.component';

const Signin = props => {
  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.3em',
        fontFamily: 'roboto',
        fontWeight: '300',
        backgroundColor: 'bisque',
      }}
    >
      <SignIn />
      <Signup />
    </div>
  );
};

export default Signin;
