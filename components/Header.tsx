//import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
//<<<<<<< HEAD
import { FaHome, FaSearch } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
//import { auth } from '../firebase-config.js';
//=======
//import { FaHome, FaSearch } from 'react-icons/fa'
//import { FiSettings } from 'react-icons/fi'
//import { auth } from '../firebase-config';
//>>>>>>> 97652314e43e677fe1d8c355fa54016f5a3e0add


function Header() {

  //initialise variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const router = useRouter()

  //logout function with Google Auth
  const logout = async () => {
    router.push('/Login');
    /*
    await signOut(auth)
      .then((userCredential) => {
        console.log("success");
        router.push('/Login');  //On successful logout, user will be directed to login page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      */
  };



  return (
    <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>
      <div className='text-left mx- 10 font-bold'>
        {/*Title*/}
        <span className='text-cyan-600 text-2xl'>Genius</span>
        <span className='text-black text-2xl'>Reviews</span>
      </div>

      {/* Home icon and styling used for refreshing page */}
      <div className='text-cyan-600 flex items-center px-7 mr-8'>
        <FaHome className='h-6 w-6' />
        <p className='ml-1 text-lg'>Home</p>
      </div>

      {/* Search box*/}
      <div className='flex-grow'>
        <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
            bg-gray-100 py-1 px-3'>
          <FaSearch className='text-cyan-600 h-6 w-10' />
          <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Peer Review' />
          <button name='searchbtn' type='submit' hidden />
        </form>

      </div>

      {/* Setting icon and styling used to edit user's details */}
      <div className='flex items-center px-3 ml-8'>
        <FiSettings className='h-6 w-6 text-cyan-600  ' />
      </div>

      {/* Logout button and styling, onClick will call logout function */}
      <div className='flex items-center px-2'>
        <button name="Signout" onClick={logout} className='text-cyan-600 flex items-end text-lg' >Signout</button>
      </div>



    </div>

  )
}

export default Header
