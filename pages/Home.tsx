import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from '../firebase-config' 
import Header from '../components/Header';
import PostBox from '../components/PostBox';
import { useRouter } from 'next/router';



/*


*/

function Home() {

  const [loginEmail, setLoginEmail] = useState ("");
  const [loginPassword, setLoginPassword] = useState ("");

  const [user, setUser] = useState({});
 
  const router = useRouter()
  
  const login = async () => {
    
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
    <div className=" absolute w-full bg-amber-200">

      <Header />
      <div className='flex items-center justify-center space-x-2 border bg-cyan-600 py-1 px-3'>
      </div>

      <div className='flex items-center justify-center space-x-2 border bg-zinc-300 py-1 px-3'>
        <p className=' flex text-center text-lg text-bold text-cyan-600'>
          Welcome to Genius Reviews, post your academic work and let your peers give you feedback
        </p>
      </div>

      <PostBox/>


      <img src='https://wallpaperbat.com/img/41158-favorite-math-wallpaper-math.jpg' 
      className='w-full h-full relative mix-blend-overlay brightness-200 opacity-30'/> 
      
    </div>
  )
}

export default Home
