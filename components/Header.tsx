import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

import { FaHome, FaSearch } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { auth } from '../firebase-config.js';
import List from '../components/List.jsx';

function Header() {

  //initialise variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const [keyWords, searchKeyWords] = useState('');

  const router = useRouter()

  /*const getStaticProps = async () => {
    const res = await fetch('https://serpapi.com/searches/6da710a47795cbfc/63446fe8c7ad41a76679b383.json');
    const data = await res.json();

    return {
      props: { items: data }
    }
  }*/


  //logout function with Google Auth
  const logout = async () => {
    router.push('/Login');

    await signOut(auth)
      .then((userCredential) => {
        console.log("success");
        router.push('/Login');  //On successful logout, user will be directed to login page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

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
        <p className='ml-1 text-lg font-semibold'>Home</p>
      </div>



      <div className='flex items-center '>
        <a href='./SearchPeerReview'
          className=' mr-5 ml-5 inline-block font-semibold text-cyan-600 text-lg  hover:text-black'>Search Peer Review</a>
      </div>

      {/*Google Scholar Search */}
      <div className='flex items-center '>
        <a href='./GoogleScholarHome'
          className=' mr-5 ml-5 inline-block font-semibold text-cyan-600 text-lg  hover:text-black'>Access Google Scholar</a>
      </div>

      {/* Logout button and styling, onClick will call logout function */}
      <div className='flex items-center px-2'>
        <button onClick={logout} className='text-cyan-600 flex items-end text-lg font-semibold  hover:text-black ' >Signout</button>
      </div>



    </div>

  )
}

export default Header
