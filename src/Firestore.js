import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "REPLACE_WITH_APIKEY", // replace it with your api key
    authDomain: "e-commerce-403fc.firebaseapp.com",
    databaseURL: "https://e-commerce-403fc.firebaseio.com",
    projectId: "e-commerce-403fc",
    storageBucket: "e-commerce-403fc.appspot.com",
    messagingSenderId: "72617957605",
    appId: "1:72617957605:web:055b5cc3464a0390195c0c",
    measurementId: "G-XEGWXV35FY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;

  