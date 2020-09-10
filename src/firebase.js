import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAAuE73WVSi6FviRPwliiwpCYS6gSsiIz0",
    authDomain: "femshopi.firebaseapp.com",
    databaseURL: "https://femshopi.firebaseio.com",
    projectId: "femshopi",
    storageBucket: "femshopi.appspot.com",
    messagingSenderId: "710039374273",
    appId: "1:710039374273:web:b17396f9eec1fd9a444740",
    measurementId: "G-E8V46W57TQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};