import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBNmZ_lf7vtQwzBSbvGu5dDy_rC7SR60EY',
  authDomain: 'scouts-profile.firebaseapp.com',
  projectId: 'scouts-profile',
  storageBucket: 'scouts-profile.appspot.com',
  messagingSenderId: '273060987316',
  appId: '1:273060987316:web:301effba3f106f52ebf2e1',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const createUserindatabase = async (userauth, fullName) => {
  if (!userauth) return;

  const userRef = firestore.doc(`users/${userauth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userauth;
    const createdAt = new Date();
    try {
      userRef.set({
        email,
        createdAt,
        fullName,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};
export const saveProfile = async (uid, profileData) => {
  if (!uid) return;

  const profileRef = firestore.doc(`profiles/${uid}`);
  const snapshot = await profileRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    try {
      profileRef.set({
        createdAt,
        ...profileData,
        youtubevideo: [],
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (snapshot.exists) {
    profileRef.update({
      ...profileData,
    });
  }
  return profileRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
