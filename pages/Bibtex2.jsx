import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { db } from '../firebase-config'
import Post2 from './Post2';
import { FiRefreshCw } from 'react-icons/fi'
import { useSession } from "next-auth/react";
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from 'firebase/firestore';

export default function List() {


  const [papers, setPapers] = useState([])
  const deleteUser = async (id) => {
    const userDoc = doc(db, "papers", id);
    await deleteDoc(userDoc);
  };
  
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
    <div>
      <ul>
        {papers.map(paper => (
          <Post2
            id={paper.id}
            // username={Post.data().username}
            title={paper.data.title}
            author={paper.data.author}
            description={paper.data.description}
            url={paper.data.url}
          
          />

        ))}
      </ul>
    </div>
  )
}