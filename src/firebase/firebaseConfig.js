// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5g5QTI-PN8WnX_Ck0mMqDTsuptr_Q8l8",
  authDomain: "whizfin-eaa16.firebaseapp.com",
  projectId: "whizfin-eaa16",
  storageBucket: "whizfin-eaa16.appspot.com",
  messagingSenderId: "739225231628",
  appId: "1:739225231628:web:2edaf1f8611b4b0db4e929",
  measurementId: "G-NZL420W94K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.firestore().settings({
  timestampsInSnapshots: true,
  merge: true,
  allowMultipleListeners: true,
});

export default firebase;
