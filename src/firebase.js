import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1Gp5s4LpcltyxASruyy7NirbwHwF7yBI",
    authDomain: "twitter-clone-d2e74.firebaseapp.com",
    databaseURL: "https://twitter-clone-d2e74.firebaseio.com",
    projectId: "twitter-clone-d2e74",
    storageBucket: "twitter-clone-d2e74.appspot.com",
    messagingSenderId: "953315060650",
    appId: "1:953315060650:web:01f29c3b5bfd6ecc1d99d3",
    measurementId: "G-CVZL7Y2GW2"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;