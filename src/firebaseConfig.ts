import firebase from "firebase/app";
import "firebase/database";
const config = {
  apiKey: "AIzaSyC4cdiMG-Zl9Ziq0HnkuhDYvnan1nP6Uxw",
  authDomain: "portfoliobymartinnilsen.firebaseapp.com",
  databaseURL:
    "https://portfoliobymartinnilsen-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfoliobymartinnilsen",
  storageBucket: "portfoliobymartinnilsen.appspot.com",
  messagingSenderId: "365385732369",
  appId: "1:365385732369:web:40d9e17460bd1c682c7cb0",
};
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
