import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDzeNHt8a6bmNK5tzvEvUmCrb9Vv-eOfD8",
    authDomain: "crwn-db-c2824.firebaseapp.com",
    projectId: "crwn-db-c2824",
    storageBucket: "crwn-db-c2824.appspot.com",
    messagingSenderId: "787708074670",
    appId: "1:787708074670:web:485a8720059f9e30f16b3f",
    measurementId: "G-XVE87M23TS"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
 
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  
  export default firebase;

