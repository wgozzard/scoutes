import React from 'react';
import { UserForm } from '../../components/UserForm';
import Link from 'next/link';
import { connect } from 'react-redux';
const App = ({ uid, user }) => {
  if (user.id !== uid) {
    console.log('hh', user, uid);
    return (
      <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        You are not the owner of this account
      </div>
    );
  }
  return (
    <div className="App">
      {user && user.id === uid ? (
        <UserForm uid={uid} />
      ) : (
        <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          please
          <Link href="/signin">
            <a style={{ margin: '0 10px' }}> sign in </a>
          </Link>
          frist
        </div>
      )}
    </div>
  );
};
App.getInitialProps = ({ query }) => {
  const { id } = query;
  return { uid: id };
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(App);
