import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react'
import { FaRecordVinyl, FaSearch } from 'react-icons/fa'
import { auth } from '../firebase-config';
import Post from './Post';
import { set } from 'react-hook-form';
//import { setDoc } from 'firebase/firestore';
import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";



function GoogleScholar() {

  //const newPaper;
  const [query, setQuery] = useState("");
  const [Title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [papers, setPapers] = useState([]);
  const [resultId, setResultId] = useState("");

  const SerpApi = require("google-search-results-nodejs");
  // API key from serpapi.com
  const search = new SerpApi.GoogleSearch("e3d9e4feb1a94f6069e31adeffdf03923a68be6ad7fdec4a892d9a287a11a78c");

  // the input query from the user
  const searchString = query;

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
      console.log(paper);

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
  }








  return (
    <div>
      {/* Google Scholar Search box*/}
      <div className='flex-grow'>
        <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
bg-gray-100 py-1 px-3'>
          <FaSearch className='text-cyan-600 h-6 w-10' />
          <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Google Scholar' onChange={(e) => setQuery(e.target.value)} />
          <button type='submit' hidden onClick={handleClick} />
          {/*<a href='GoogleScholarResults'>
            Search
  </a>*/}
        </form>
      </div >

      <div className='flex-row'>
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





    </div>


  )


}

export default GoogleScholar