import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRecordVinyl, FaSearch, FaHome } from 'react-icons/fa'
import { auth } from '../firebase-config';
import PostGoogleScholar from './PostGoogleScholar';
import { set } from 'react-hook-form';
//import { setDoc } from 'firebase/firestore';
import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import { SP } from 'next/dist/shared/lib/utils';
import { setDocumentLoading } from 'react-doc-viewer/build/state/actions';



function GoogleScholar() {

  //const newPaper;
  const [queryR, setQuery] = useState("");
  const [Title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [papers, setPapers] = useState([]);
  const [resultId, setResultId] = useState("");
  const [loading, setLoading] = useState(false);
  //const [searchedPaps, setSearchedPaps] = useState([]);

  const SerpApi = require("google-search-results-nodejs");
  // API key from serpapi.com
  const search = new SerpApi.GoogleSearch("e3d9e4feb1a94f6069e31adeffdf03923a68be6ad7fdec4a892d9a287a11a78c");

  // the input query from the user
  const searchString = queryR;

  const params = {
    engine: "google_scholar",                             // search engine
    q: searchString,                                      // search query
    hl: "en",                                             // Parameter defines the language to use for the Google search
  };

  const getScholarData = function async({ organic_results }) {
    return organic_results.map((result) => {
      const { title, result_id, link = "link not available", snippet, publication_info, inline_links } = result;
      //console.log(result.title);

      const paper = {
        Title: result.title,
        author: result.publication_info.summary,
        url: result.link,
        description: result.snippet,
        query: searchString,
        id: result.result_id

      }
      //console.log(paper);



      try {
        setDoc(doc(db, "gsPapers", result_id), paper);

        setMessage({ error: false, msg: " new paper added!" });
      }
      catch (err) {
        //setMessage({error: true });
      }

      setTitle("");
      setAuthor("");
      setURL("");
      setDescription("");
      setResultId("");


      return {
        title,
        result_id,
        link,
        publication_info: publication_info?.summary,
        snippet,
        cited_by: inline_links?.cited_by?.link || "link not available",
        related_articles: inline_links?.related_pages_link || "link not available",
        all_versions: inline_links?.versions?.link || "link not available",
      };

    });

  };

  const getJson = (params) => {
    return new Promise((resolve) => {
      search.json(params, resolve);
    })
  }

  const handleClick = async (event) => {
    event.preventDefault();
    getJson(params).then(getScholarData).then(getJson(params));

    getPapers();
  }


  useEffect(() => {
    getPapers()
  }, [])

  useEffect(() => {
    console.log(papers)
  }, [papers])

  function getPapers() {
    const gsPapersCollectionRef = collection(db, 'gsPapers');
    getDocs(gsPapersCollectionRef)
      .then(response => {
        //console.log(response.docs)
        const paps = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setPapers(paps)
      })
      .catch(error => console.log(error.message))
  }









  return (

    <div className=' bg-zinc-300 '>
      <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>

        {/* Google Scholar Search box*/}
        <div className='flex-grow'>
          <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg bg-gray-100 py-1 px-3'>
            <FaSearch className='text-cyan-600 h-6 w-10' />
            <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Google Scholar' onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' hidden onClick={handleClick} />
          </form>
        </div >
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
            paper.data.query.toLowerCase().includes(queryR)
          ).map(paper => (
            <PostGoogleScholar
              id={paper.id}
              title={paper.data.Title}
              author={paper.data.author}
              url={paper.data.url}
              description={paper.data.description}
            />

          ))}
        </ul>
      </div>





    </div >
  )


}

export default GoogleScholar