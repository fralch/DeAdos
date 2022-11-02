import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
// import {getFirestore} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)