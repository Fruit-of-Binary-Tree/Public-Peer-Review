// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Home from "./pages";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-_wn3L8QSS336bqJN8fzbyU4x5pQZIkg",
  authDomain: "project-peer-review-af22f.firebaseapp.com",
  projectId: "project-peer-review-af22f",
  storageBucket: "project-peer-review-af22f.appspot.com",
  messagingSenderId: "362648112170",
  appId: "1:362648112170:web:ba2cd984da8f1ddcfd0753",
  measurementId: "G-YB23C0RH4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};