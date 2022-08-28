import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase-config' 
import {FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

function Home() {

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
                <h2 className='text-3 font-bold mb-2 text-cyan-600'>What would you like to do?</h2>
                <div className="border-2 w-10 inline-block border-cyan-600 mb-4"></div>
                <div className='flex justify-center p-3 mb-1'>
                <a href='#' className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Create new entry for new paper</a>

                <a href='#' className='text-cyan-600 border-2 border-cyan-600 rounded-full px-12 py-2 inline-block font-semibold 
                    hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Rate an existing paper</a>                
            </div>
            
            

            </div>
             
            </div>
          
        </div>

      </main>

  
      
    </div>
  )
}

export default Home