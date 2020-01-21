import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
let firebaseConfig = {
  apiKey: "AIzaSyDkay6EFqrYSnCTWAvb_iv6Te9pWc6Qn2E",
  authDomain: "animeflutter.firebaseapp.com",
  databaseURL: "https://animeflutter.firebaseio.com",
  projectId: "animeflutter",
  storageBucket: "animeflutter.appspot.com",
  messagingSenderId: "881652771620",
  appId: "1:881652771620:web:95ca9db971d3e29aece1b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
