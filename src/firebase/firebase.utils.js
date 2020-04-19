import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADizYFHE7GjhIAaKukuoDteQ1sVwHMqmI',
  authDomain: 'crwn-clothing-3e0ec.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-3e0ec.firebaseio.com',
  projectId: 'crwn-clothing-3e0ec',
  storageBucket: 'crwn-clothing-3e0ec.appspot.com',
  messagingSenderId: '31279482945',
  appId: '1:31279482945:web:2ba6fd595d65dd3e3f9ec0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
