import React, { useEffect, useState } from 'react'
import {collection, getDocs, query} from 'firebase/firestore'
import {db} from '../firebase-config'
import Post from '../pages/Post';
import Header from '../components/Header';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import {FaHome, FaSearch} from 'react-icons/fa'


export default function SearchPeerReview() {


const [papers, setPapers] = useState([])

const [query, setQuery] = useState("");

useEffect(() => {
    getPapers()
}, [])

useEffect(() => {
    console.log(papers)
}, [papers])

function getPapers(){
    const movieCollectionRef = collection(db, 'papers');
    getDocs(movieCollectionRef)
        .then(response => {
            //console.log(response.docs)
            const movs = response.docs.map(doc => ({
                data: doc.data(), 
                id: doc.id,
            }))
            setPapers(movs)
        })
        .catch(error => console.log(error.message))
}



  return (

    <div className=' bg-zinc-300 '>
        <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>
      <div className='text-left mx- 10 font-bold'>
        {/*Title*/}
        <span className='text-cyan-600 text-2xl'>Genius</span>
        <span className='text-black text-2xl'>Reviews</span>
      </div>

      {/* Search box*/}
      <div className='flex-grow'>
        <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
            bg-gray-100 py-1 px-3 ml-10'>
          <FaSearch className='text-cyan-600 h-6 w-10' />
          <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Peer Review' onChange={(e) => setQuery(e.target.value)} />
          <button type='submit' hidden />
        </form>

      </div>

      {/* Home icon and styling used for refreshing page */}
      <div className='text-cyan-600 flex items-center px-7 '>
      <a href='./Home' className='flex items-center'>
              <FaHome className='h-6 w-6' />
              <p className='ml-1 text-lg'>Home</p>
              </a>

      </div>
      
      </div>

    



    <div className='mr-60 ml-60'>
      <ul>
        {papers.filter((paper) => 
          paper.data.author.toLowerCase().includes(query)
          ).map(paper => (
            <Post
            id={paper.id}
            title={paper.data.title}
            author={paper.data.author}
            url={paper.data.url}
            />
             
              ))}
      </ul>
    </div>

    </div>
  )
}