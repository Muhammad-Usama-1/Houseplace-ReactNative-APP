import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYaqsmfhucECOHuuR0JABfBqQncNYL2JA",
  authDomain: "react-native-3c8ae.firebaseapp.com",
  projectId: "react-native-3c8ae",
  storageBucket: "react-native-3c8ae.appspot.com",
  messagingSenderId: "406376447950",
  appId: "1:406376447950:web:bbde007ab0d8ab847c359f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
