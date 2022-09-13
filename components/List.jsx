import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase-config'

export default function List() {


const [papers, setPapers] = useState([])

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
    <div>
        <a href='#' onClick={() => getPapers()}
              className='border-2 text-cyan-600 border-cyan-600 rounded-md mt-2 px-12 py-2 inline-block font-semibold
              hover:bg-cyan-600 hover:text-white transition ease-out duration-500'>Refresh List?</a> 
      <h2> <b>List:</b></h2>
      <ul>
        {papers.map(paper => (
            <li key={paper.id}> <b>Author:</b> {paper.data.author} | <b>Title:</b> {paper.data.title} | <b>URL:</b> {paper.data.url} </li>
            ))}
      </ul>
    </div>
  )
}
