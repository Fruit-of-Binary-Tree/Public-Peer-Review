import React, { useEffect, useState } from 'react'
//import {collection, getDocs} from 'firebase/firestore'
//import {db} from '../firebase-config'
import Post from '../pages/Post';
import {FiRefreshCw} from 'react-icons/fi'


export default function List() {


const [papers, setPapers] = useState([])

useEffect(() => {
    getPapers()
}, [])

useEffect(() => {
    console.log(papers)
}, [papers])

function getPapers(){
  /*
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
  */      


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
          title={paper.data.title}
          author={paper.data.author}
          url={paper.data.url}

          />
           
            ))}
      </ul>
    </div>
  )
}
