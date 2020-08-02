import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBaWUibcQAQupu6AkZQgIi3HIRD5cgoqhQ",
  authDomain: "firegram-ff6a6.firebaseapp.com",
  databaseURL: "https://firegram-ff6a6.firebaseio.com",
  projectId: "firegram-ff6a6",
  storageBucket: "firegram-ff6a6.appspot.com",
  messagingSenderId: "951680061367",
  appId: "1:951680061367:web:cc5227bec00175b2cf2232",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
