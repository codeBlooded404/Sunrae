//https://firebase.google.com/docs/auth/web/start
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfV4H256j4osU6CE3eIgOBQh-Klri6cg",
  authDomain: "sunraecap.firebaseapp.com",
  projectId: "sunraecap",
  storageBucket: "sunraecap.appspot.com",
  messagingSenderId: "249438781867",
  appId: "1:249438781867:web:a00ba1f0d516db4b1952ee",
  measurementId: "G-3S2HPYJ375",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
