// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBsR2GwtiomX4VnbatxBJVA4bB6MxqAlM",
  authDomain: "clone-e9205.firebaseapp.com",
  projectId: "clone-e9205",
  storageBucket: "clone-e9205.firebasestorage.app",
  messagingSenderId: "851431072220",
  appId: "1:851431072220:web:4f5fd980c4e6e56c726f19",
  measurementId: "G-FF0GNGCNQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();