import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import Post from '../pages/Post';
import { FiRefreshCw } from 'react-icons/fi'
import { useSession } from "next-auth/react";


export default function List() {


  const [papers, setPapers] = useState([])


  useEffect(() => {
    getPapers()
  }, [])

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

          />

        ))}
      </ul>
    </div>
  )
}
