import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
// import {getFirestore} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBm29s27MlvC9J4LkHW5gftm8QC-Pim48I",
  authDomain: "ucci-1202.firebaseapp.com",
  projectId: "ucci-1202",
  storageBucket: "ucci-1202.appspot.com",
  messagingSenderId: "1079734346972",
  appId: "1:1079734346972:web:26086d25414f21a52a4019",
  measurementId: "G-XH60L5XD7N"
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore();