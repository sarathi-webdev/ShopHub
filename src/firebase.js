// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyzT6HPr30NnRvamODxi4caLawTb6L1ME",
  authDomain: "shophub-9e1a1.firebaseapp.com",
  projectId: "shophub-9e1a1",
  storageBucket: "shophub-9e1a1.firebasestorage.app",
  messagingSenderId: "382315684180",
  appId: "1:382315684180:web:135eee5e1fdea6b62968c1",
  measurementId: "G-19B02Q5F9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();


export {app , auth, db}