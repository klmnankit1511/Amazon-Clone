import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzo4ygb_iUq8YywpWdoXsELSkidM2JiXw",
  authDomain: "challenge-2b45d.firebaseapp.com",
  projectId: "challenge-2b45d",
  storageBucket: "challenge-2b45d.appspot.com",
  messagingSenderId: "77645371857",
  appId: "1:77645371857:web:7a917831f25a28400228f0",
  measurementId: "G-6X5FWY5TXQ",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
