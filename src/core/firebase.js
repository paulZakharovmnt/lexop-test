import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdnw2H0Cu4__EMWrEEWuNMZq6hHMoNfgo",
  authDomain: "lexop-test.firebaseapp.com",
  databaseURL: "https://lexop-test-default-rtdb.firebaseio.com",
  projectId: "lexop-test",
  storageBucket: "lexop-test.appspot.com",
  messagingSenderId: "357862369053",
  appId: "1:357862369053:web:e7fa7532b705230a5423f4",
};

export const fire = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
