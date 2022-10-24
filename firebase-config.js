// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/router'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
