import React, { useEffect, useState } from 'react'
import {collection, getDocs, query} from 'firebase/firestore'
import {db} from '../firebase-config'

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

//<<<<<<< HEAD
import {FaHome, FaSearch} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import { auth } from '../firebase-config.js';

export default function List() {


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

    <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>
    {/* Search box*/}
    <div className='flex-grow'>
    <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
        bg-gray-100 py-1 px-3'>
      <FaSearch className='text-cyan-600 h-6 w-10' />
      <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Peer Review' onChange={(e) => setQuery(e.target.value)} />
      <button type='submit' hidden />
    </form>

  </div>

    <div>
        <a href='#' onClick={() => getPapers()}
              className='border-2 text-cyan-600 border-cyan-600 rounded-md mt-2 px-12 py-2 inline-block font-semibold
              hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Refresh List?</a> 
      <h2> <b>List:</b></h2>
      <ul>
        {papers.filter((paper) => 
          paper.data.author.toLowerCase().includes(query)
          ).map(paper => (
            <li key={paper.id}> <b>Title:</b> {paper.data.title}<br/>
            &ensp; <b>Author:</b> {paper.data.author} | <b> URL:</b> {paper.data.url} </li> 
            ))}
      </ul>
    </div>

    </div>
  )
}

