import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import Post from '../pages/Post';
import { FiRefreshCw } from 'react-icons/fi'
import { useSession } from "next-auth/react";
import { FaHome, FaSearch } from 'react-icons/fa'


export default function List() {


    const [papers, setPapers] = useState([])


    useEffect(() => {
        getPapers()
    }, [])

    useEffect(() => {
        console.log(papers)
    }, [papers])

    function getPapers() {

        const movieCollectionRef = collection(db, 'gsPapers');
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
        <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>
            <div className='mr-60 ml-60'>
                <div className='flex items-center text-cyan-600 font-semibold text-lg'>
                    <FaHome className='h-6 w-6 mr-1' />
                    <a href='./Home'>Home</a>

                    <a href='./GoogleScholar'>Search Google Scholar</a>
                </div>
                <FiRefreshCw
                    onClick={() => getPapers()}
                    className='btn text-cyan-600' />


                <ul>
                    {papers.map(paper => (
                        <Post
                            id={paper.id}
                            // username={Post.data().username}
                            title={paper.data.Title}
                            author={paper.data.author}
                            description={paper.data.description}
                            url={paper.data.url}
                            creator={"Google Scholar"}

                        />

                    ))}
                </ul>
            </div>
        </div>
    )
}