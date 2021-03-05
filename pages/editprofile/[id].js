import React from 'react';
import { UserForm } from '../../components/UserForm';
import Link from 'next/link';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase-config';
const App = ({ uid, user }) => {
  if (uid === null || user === null) {
    return (
      <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        this account does not exists or you are not logged in.
      </div>
    );
  }
  if (user.id !== uid) {
    return (
      <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        You are not the owner of this account
      </div>
    );
  } else {
    return (
      <div className="App">
        {user && user.id === uid ? (
          <UserForm uid={uid} />
        ) : (
          <div
            style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            please
            <Link href="/signin">
              <a style={{ margin: '0 10px' }}> sign in </a>
            </Link>
            frist
          </div>
        )}
      </div>
    );
  }
};
App.getInitialProps = async ({ query }) => {
  const { id } = query;
  const profileRef = firestore.doc(`profiles/${id}`);
  const snapshot = await profileRef.get();

  let uuid = null;
  if (snapshot.exists) {
    uuid = id;
  }
  return { uid: uuid };
};
const mapStateToProps = state => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(App);
