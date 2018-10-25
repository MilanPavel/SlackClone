import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBRZ_xM_PKN6FfHJYFnwkwjcxuBG9GONAM",
  authDomain: "slack-7fd08.firebaseapp.com",
  databaseURL: "https://slack-7fd08.firebaseio.com",
  projectId: "slack-7fd08",
  storageBucket: "slack-7fd08.appspot.com",
  messagingSenderId: "740179530800"
};
firebase.initializeApp(config);

export default firebase;
