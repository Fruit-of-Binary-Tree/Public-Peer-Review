import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import PostGoogleScholar from '../pages/PostGoogleScholar';
import { FiRefreshCw } from 'react-icons/fi'
import { useSession } from "next-auth/react";
import GSHeader from '../components/GSHeader';


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
        <div className=''>
            <div className='flex mr-60 ml-60 py-2'>
                <FiRefreshCw
                    onClick={() => getPapers()}
                    className='btn text-cyan-600' />


                <ul>
                    {papers.map(paper => (
                        <PostGoogleScholar
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