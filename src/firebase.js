import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRsWKBaCkuD95aEuG1nH-ofbAm-mFgZfM",
    authDomain: "react-netflix-app-53e77.firebaseapp.com",
    projectId: "react-netflix-app-53e77",
    storageBucket: "react-netflix-app-53e77.appspot.com",
    messagingSenderId: "242573598962",
    appId: "1:242573598962:web:806b414a5ca13a5334706b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;