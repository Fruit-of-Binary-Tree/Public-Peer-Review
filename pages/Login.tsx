//<<<<<<< HEAD
import React, { useState ,useCallback} from 'react'
import {FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import { auth, provider } from "../firebase-config.js"
/*=======
import React, { useState, useCallback } from 'react'
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { auth, provider } from "../firebase-config"
>>>>>>> 97652314e43e677fe1d8c355fa54016f5a3e0add*/

//imports for Google authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { useRouter } from 'next/router'

function Login() {

  //initializing variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const router = useRouter()

  const login = async () => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword) //Manual sign in with users details from sign up page
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("success"); //If successful login to home page
        router.push('/Home');


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; //If unsuccessful error message will be displayed
      });

  };

  //On Google icon click the userr will be directed to gmail where they can enter their email and password to sign in with Google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      router.push('/Home'); //If successful login to home page
    }).catch((error) => {
      console.log(error);
    });
  };

  {/*UI components*/ }
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100
    w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_1280.jpg')]"> {/*Background image and styling*/}

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className='text-left font-bold'>
              {/*Title of website and styling*/}
              <span className='text-cyan-600 text-3xl'>Genius</span>
              <span className='text-black text-3xl'>Reviews</span>
            </div>
            <div className='py-7'>
              <h2 className='text-3 font-bold mb-2 text-cyan-600'>Sign in to Account</h2>
              <div className="border-2 w-10 inline-block border-cyan-600 mb-4"></div>
              <div className='flex justify-center p-3 mb-1'>
                {/*Button to initiate Google Auth*/}
                <a href="#" onClick={signInWithGoogle} className='border-2 border-gray-200 rounded-full p-3 mx-1 mr-3'>
                  <FaGoogle className='text-sm' />
                </a>
                <p className='px-4 py-2 inline-block '>Login with Google</p>
              </div>

              <div className='py-1 mb-3'>
                <p className=''>Or sign in with email account</p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  {/* Email input*/}
                  <FaRegEnvelope className='text-gray-400 mr-2' />
                  {/* Email input to be validated in firebase*/}
                  <input type="email" name='email' placeholder='Email' onChange={(event) => { setLoginEmail(event.target.value) }} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'>
                  {/* Password input*/}
                  <MdLockOutline className='text-gray-400 mr-2' />
                  {/* Password input to be validated in firebase*/}
                  <input type="password" name='password' placeholder='Password' onChange={(event) => { setLoginPassword(event.target.value) }} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>
                {/* Button to login and styling with hover effect, onClick event will validate information*/}
                <a href='#' onClick={login} className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Login</a>
              </div>


            </div>

          </div> {/*End of sign in section*/}

          <div className="w-2/5 bg-cyan-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
            <h2 className="text-3xl font-bold mb-2">Join our community!</h2>
            <div className="border-2 w-10 border-white inline-block mb-3"></div>
            <p className="mb-10 py-2 "> Fill in your details...</p>
            {/* Button to take the user to Signup page with styling*/}
            <a href='./signup'
              className='border-2 border-white rounded-full px-10 py-2 inline-block font-semibold
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Sign Up</a>
          </div> {/*End of sign up section*/}
        </div>

      </main>



    </div>
  )
}

export default Login

