import React, { useState } from 'react'
import {auth, signInWithGoogle} from '../firebase-config' 
import {FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
function Login() {

  const [loginEmail, setLoginEmail] = useState ("");
  const [loginPassword, setLoginPassword] = useState ("");

  const [user, setUser] = useState({});
 


  const login = async () => {
    
    const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(user);
    
  };
  
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100
    w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_1280.jpg')]">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "> 
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className='text-left font-bold'>
              <span className='text-cyan-600 text-3xl'>Genius</span>
              <span className='text-black text-3xl'>Reviews</span>
              </div>
              <div className='py-10'>
                <h2 className='text-3 font-bold mb-2 text-cyan-600'>Sign in to Account</h2>
                <div className="border-2 w-10 inline-block border-cyan-600 mb-4"></div>
                <div className='flex justify-center p-3 mb-1'>
                 <p className='border-2 border-gray-200 rounded-full p-3 mx-1 mr-3'>
                <FaGoogle className='text-sm'/>
                </p>  
                <a href='#' onClick={signInWithGoogle} className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Login with Google</a>       
            </div>
            <div className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 mr-2'/>
                    <input type="email" name='email' placeholder='Email' onChange={(event) => {setLoginEmail(event.target.value)}} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'>
                    <MdLockOutline className='text-gray-400 mr-2'/>
                    <input type="password" name='password' placeholder='Password'onChange={(event) => {setLoginPassword(event.target.value)}} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <a href='./Home' onClick={login} className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Login</a>    
            </div> 
          <h4> User logged in:</h4>
            

            </div>
             
            </div> {/*Sign in section*/}
          <div className="w-2/5 bg-cyan-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
            <h2 className="text-3xl font-bold mb-2">Join our community!</h2>
            <div className="border-2 w-10 border-white inline-block mb-3"></div>
            <p className="mb-10 py-2 "> Fill in your details...</p>
            <a href='./signup' 
              className='border-2 border-white rounded-full px-10 py-2 inline-block font-semibold
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Sign Up</a>
            </div> {/*Sign up section*/}
        </div>

      </main>

  
      
    </div>
  )
}

export default Login