import React, { useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase-config.js'

import Header from '../components/Header';
import { useRouter } from 'next/router';
import List from '../components/List'
import Feed from '../components/Feed.jsx';

function Home() {

  //initialise variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const router = useRouter()

  //Users login session
  const login = async () => {
    router.push('/Home');
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("success");
        router.push('/Home');
        

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }); 


  };



  return (
    <div className="relative bg-zinc-300">

      <Header /> {/*Header component containing Search, logout, title and user settings */}
      <div className='flex items-center justify-center space-x-2 border bg-cyan-600 py-1 px-3'>
      </div>

      <div className='flex items-center justify-center space-x-2 border bg-zinc-300 py-1 px-3'>
        <p className=' flex text-center text-lg text-bold text-cyan-600'>
          Welcome to Genius Reviews, post your academic work and let your peers give you feedback
        </p>
      </div>

    <div className='flex-row'>

    <div className='flex bg-transparent justify-center items-center py-3 px-2 '>
        <a href='./CreatePost'
          className='border-2 text-cyan-600 border-cyan-600 rounded-md mt-2 px-12 py-2 inline-block font-semibold
              hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Create a Post</a>
    </div>
    <Feed/>

    </div>
  
    </div>
  )
}

export default Home

