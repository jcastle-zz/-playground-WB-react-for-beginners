import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYAP2pq6VGhNbJ4h41vv8Jk0quFZAkEQQ",
    authDomain: "catch-of-the-day-joe-castle-v2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-joe-castle-v2.firebaseio.com",
    projectId: "catch-of-the-day-joe-castle-v2",
    storageBucket: "catch-of-the-day-joe-castle-v2.appspot.com",
    messagingSenderId: "262886472911",
    appId: "1:262886472911:web:7b8fb67a8c84010c93cbba"
  });

  const base = Rebase.createClass(firebaseApp.database());

  // This is a named export
  export { firebaseApp };

  // This is a default export
  export default base;