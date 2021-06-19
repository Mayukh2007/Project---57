import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCSG5CtPcWJtRlqnlzB8cmyWZ6eM1RqL5w",
  authDomain: "newsletter-81251.firebaseapp.com",
  projectId: "newsletter-81251",
  storageBucket: "newsletter-81251.appspot.com",
  messagingSenderId: "609056924033",
  appId: "1:609056924033:web:b307688a70e8e748230880"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();