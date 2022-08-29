// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/router'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*const firebaseConfig = {
  apiKey: "AIzaSyB-_wn3L8QSS336bqJN8fzbyU4x5pQZIkg",
  authDomain: "project-peer-review-af22f.firebaseapp.com",
  projectId: "project-peer-review-af22f",
  storageBucket: "project-peer-review-af22f.appspot.com",
  messagingSenderId: "362648112170",
  appId: "1:362648112170:web:ba2cd984da8f1ddcfd0753",
  measurementId: "G-YB23C0RH4Z"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyAaeyN00ZUj8oUdEQAZp8XQ1yXbPmMa8oY",
  authDomain: "fir-3ad36.firebaseapp.com",
  projectId: "fir-3ad36",
  storageBucket: "fir-3ad36.appspot.com",
  messagingSenderId: "988735024154",
  appId: "1:988735024154:web:abda526e6399f10725f5a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
