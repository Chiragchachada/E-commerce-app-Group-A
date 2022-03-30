// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yJMll-Vw5EoZQ76Rz61FAjba5Uy3Jzo",
  authDomain: "logistics-and-transportation.firebaseapp.com",
  projectId: "logistics-and-transportation",
  storageBucket: "logistics-and-transportation.appspot.com",
  messagingSenderId: "757525884061",
  appId: "1:757525884061:web:e4d73e85cf18eb7750f874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
