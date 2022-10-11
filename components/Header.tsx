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


  const handleChange = (event: any) => {
    searchKeyWords(event.target.value);
  }

  const handleClick = (event: any) => {
    event.preventDefault();
    searchWords(keyWords);
  }



  //Search Google Scholar Function
  const searchWords = async (searchValue: any) => {
    searchKeyWords(searchValue);

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("7d67eaa0033c6aae1c4c233711f59dee820dabb5f34966d25f22ed319abace64");

    const params = {
      engine: "google_scholar",
      // query should be the input from search box
      q: searchValue
    };

    const callback = function (data: any) {
      console.log(data["organic_results"]);
    };

    // Show result as JSON
    search.json(params, callback);

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

      {/* Search box*/}
      <div className='flex-grow'>
        <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
            bg-gray-100 py-1 px-3'>
          <FaSearch className='text-cyan-600 h-6 w-10' />
          <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Peer Review' onChange={handleChange} value={keyWords} />
          <button type='submit' hidden onClick={handleClick} />
        </form>
      </div>

      <div className='flex items-center '>
        <a href='./SearchPeerReview'
          className=' mr-5 ml-5 inline-block font-semibold text-cyan-600 text-lg  hover:text-black'>Search Peer Review</a>
      </div>

      {/* Logout button and styling, onClick will call logout function */}
      <div className='flex items-center px-2'>
        <button onClick={logout} className='text-cyan-600 flex items-end text-lg font-semibold  hover:text-black ' >Signout</button>
      </div>



    </div>

  )
}

export default Header
