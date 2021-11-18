import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCLxa5nj1U8p0bmWV90M8KnuTwFqM5VcJQ",
    authDomain: "crwn-db-f7b6b.firebaseapp.com",
    projectId: "crwn-db-f7b6b",
    storageBucket: "crwn-db-f7b6b.appspot.com",
    messagingSenderId: "1039862726395",
    appId: "1:1039862726395:web:9a4b7ab7098add842efa5e",
    measurementId: "G-6KE5Y840DC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;