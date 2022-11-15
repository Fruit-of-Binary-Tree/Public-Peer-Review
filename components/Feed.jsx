import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { db } from '../firebase-config'
import Post from '../pages/Post';
import { FiRefreshCw } from 'react-icons/fi'
import { useSession } from "next-auth/react";

import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from 'firebase/firestore';

function refresh(){
  window.location.reload();
}

export default function List() {


  const [papers, setPapers] = useState([])
  const deleteUser = async (id) => {
    const userDoc = doc(db, "papers", id);
    await deleteDoc(userDoc);
  };
  
  useEffect(() => {
    getPapers()
  }, [])
  // onSnapshot(query(collection(db,'papers'),orderBy('timestamp','desc')), snapshot =>{
  //   getPapers()
  // })

  useEffect(() => {
    console.log(papers)
  }, [papers])

  function getPapers() {

    const movieCollectionRef = collection(db, 'papers');
    getDocs(movieCollectionRef)
      .then(response => {
        //console.log(response.docs)
        const movs = response.docs.map(doc => (
          {
            data: doc.data(),
            id: doc.id,
          }))
        setPapers(movs)
      })
      .catch(error => console.log(error.message))



  }

  return (
    <div className='mr-60 ml-60'>
      
      <FiRefreshCw
        onClick={() => getPapers()}
        className='btn text-cyan-600' />
      <ul>
        {papers.map(paper => (
          <Post
            id={paper.id}
            // username={Post.data().username}
            title={paper.data.title}
            author={paper.data.author}
            description={paper.data.description}
            url={paper.data.url}
            creator={paper.data.creator.name}
            del = {<button className='ml-2 border-2 mt-5 border-cyan-600 rounded-full px-10 py-2 inline-block font-semibold mr-5 text-cyan-600
            hover:bg-cyan-600 hover:text-white transition ease-out duration-500'
                onClick={() => { deleteUser(paper.id);refresh() }} > Delete </button>}
          
          />

        ))}
      </ul>
    </div>
  )
}
