import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB3-3HrEwdCL2wnG6VacMI1lCVzjRJQ8O4",
    authDomain: "ig-reels-clone-ef104.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-ef104.firebaseio.com",
    projectId: "ig-reels-clone-ef104",
    storageBucket: "ig-reels-clone-ef104.appspot.com",
    messagingSenderId: "651245347707",
    appId: "1:651245347707:web:80c1239c6d982ae96c13de",
    measurementId: "G-6GQ7RZRL9S"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;