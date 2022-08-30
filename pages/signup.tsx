import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {auth} from '../firebase-config' 
import {FaRegEnvelope, FaUser} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

export default function signup() {

  const [registerEmail, setRegisterEmail] = useState ("");
  const [registerPassword, setRegisterPassword] = useState ("");

  const register = async () => {
    
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(user);
    
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100
    w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_1280.jpg')]">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "> 
      <div className="bg-cyan-600 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-2/5 p-5">
            <div className='text-left font-bold'>
            <span className='text-white text-3xl'>Genius</span>
              <span className='text-black text-3xl'>Reviews</span>
              </div>
              <div className='py-40 '>
              <h2 className="text-white text-3xl font-bold mb-2">Already have an account?</h2>
              <a href='./Login' 
              className='border-2 text-white border-white rounded-full mt-2 px-12 py-2 inline-block font-semibold
              hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Sign In</a>
              </div>
            </div> {/*Log in section*/}


          <div className="w-3/5 bg-white text-black rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
          <h2 className='text-3xl font-bold mb-3 text-cyan-600'>Create an Account</h2>
                <div className="border-2 w-10 inline-block border-cyan-600 mb-3"></div>
            <div className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaUser className='text-gray-400 mr-2'/>
                    <input type="email" name='email' placeholder='Name' className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaUser className='text-gray-400 mr-2'/>
                    <input type="email" name='email' placeholder='Surname' className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-400 mr-2'/>
                    <input type="password" name='password' placeholder='Email' onChange={(event) => {setRegisterEmail(event.target.value)}} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 mr-2'/>
                    <input type="password" name='password' placeholder='Password' onChange={(event) => {setRegisterPassword(event.target.value)}} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-400 mr-2'/>
                    <input type="password" name='password' placeholder='Password Confirmation' className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <button onClick={register} className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 mt-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Sign Up</button>    
            </div> 

            <h4> User Logged in:</h4>
          


            

          </div> {/*Sign up section*/}
        </div>

      </main>

  
      
    </div>
  )
}
