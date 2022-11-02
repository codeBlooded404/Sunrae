import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfV4H256j4osU6CE3eIgOBQh-Klri6cg",
  authDomain: "sunraecap.firebaseapp.com",
  projectId: "sunraecap",
  storageBucket: "sunraecap.appspot.com",
  messagingSenderId: "249438781867",
  appId: "1:249438781867:web:a00ba1f0d516db4b1952ee",
  measurementId: "G-3S2HPYJ375"
};

//initialize app
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// //initial db
// const database = firebase.firestore();

// //initialize auth
// const authentication = firebase.auth();

// export {database, authentication};

const db = firebase.firestore();
const auth = firebase.auth();

export {auth};