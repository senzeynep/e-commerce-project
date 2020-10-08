import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5VJrzx_pPSI_uUV8ie8RkfLbI2OOsNFA",
  authDomain: "e-commerce-403fc.firebaseapp.com",
  databaseURL: "https://e-commerce-403fc.firebaseio.com",
  projectId: "e-commerce-403fc",
  storageBucket: "e-commerce-403fc.appspot.com",
  messagingSenderId: "72617957605",
  appId: "1:72617957605:web:055b5cc3464a0390195c0c",
  measurementId: "G-XEGWXV35FY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();