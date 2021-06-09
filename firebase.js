import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC500H4k25CpR5rX-xO_NnyPvfQVUjbIjg",
    authDomain: "tik-tok-clone-3e77d.firebaseapp.com",
    projectId: "tik-tok-clone-3e77d",
    storageBucket: "tik-tok-clone-3e77d.appspot.com",
    messagingSenderId: "184706621269",
    appId: "1:184706621269:web:edac577d5e682ca96ed9dc",
    measurementId: "G-QPNKMC1D4T"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
