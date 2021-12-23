import firebase from "firebase/app"
import "firebase/firestore";
// import {firebaseConfig} from "../firebaseConfig"

const firebaseConfig = {
  apiKey: "AIzaSyCHCac2i7jj661L9PSbS5yEWjy0eSx-6yU",
  authDomain: "yourwotmatters.firebaseapp.com",
  projectId: "yourwotmatters",
  storageBucket: "yourwotmatters.appspot.com",
  messagingSenderId: "69070622515",
  appId: "1:69070622515:web:a3ca7d7af85cea397d3846",
  measurementId: "G-3215TDGRGQ",
};

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
