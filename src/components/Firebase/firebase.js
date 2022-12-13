import firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCI3MRF-5upfJAY4HajhaU3Hr3w54Ucu60",
  authDomain: "gymmanagement-4f0f4.firebaseapp.com",
  projectId: "gymmanagement-4f0f4",
  storageBucket: "gymmanagement-4f0f4.appspot.com",
  messagingSenderId: "168170519296",
  appId: "1:168170519296:web:05aea0adeef73c277751e5",
  measurementId: "G-VHDW12BX3R"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  // const Axios = firebase.Axios();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db , storage , auth , provider}
