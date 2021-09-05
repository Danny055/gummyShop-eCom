import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   //api key missing
    authDomain: "cbd-ecom.firebaseapp.com",
    projectId: "cbd-ecom",
    storageBucket: "cbd-ecom.appspot.com",
    messagingSenderId: "64778263751",
    appId: "1:64778263751:web:37630287ef5a30107b72e2",
    measurementId: "G-GNY94WDE9P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
