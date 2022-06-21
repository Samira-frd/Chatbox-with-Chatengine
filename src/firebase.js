import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA8YDQ29ulP1F4b1MR_6gjtkviDfar5hM0",
    authDomain: "arimas-chatbox.firebaseapp.com",
    projectId: "arimas-chatbox",
    storageBucket: "arimas-chatbox.appspot.com",
    messagingSenderId: "157859253151",
    appId: "1:157859253151:web:733a1c818683bbaa444baa"
  }).auth();