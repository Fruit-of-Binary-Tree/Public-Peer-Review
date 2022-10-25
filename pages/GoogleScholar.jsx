import axios from 'axios';
import React, { useState } from 'react'
import { FaRecordVinyl, FaSearch } from 'react-icons/fa'
import results from '../api.json'
import Post from './Post';



function GoogleScholar() {


  const [query, setQuery] = useState('');
  /*const [information, setInformation] = useState({});
  const [loaded, setLoaded] = useState(false);
  //const results = useState([]);
  //const resultsArr = [];

  function updateQuery(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  function displayInfo(response) {
    console.log(response);
    setInformation({
      title: response.title,
      description: response.snippet,
      url: response.link
    });
    setLoaded(true);
  }

  function submitSearch(event) {
    event.preventDefault();
    if (query.length > 0) {
      let apiKey = "e3d9e4feb1a94f6069e31adeffdf03923a68be6ad7fdec4a892d9a287a11a78c";
      let url = 'https://serpapi.com/search.json?engine=google_scholar&q=${query}&api_key=${apiKey}'

      axios
        .get(url)
        .then(displayInfo)
        .catch((error) => {
          setLoaded(false);
          alert("Please enter a valid query");
          console.log(error.response);
        });
    } else {
      alert("Please enter a query");
      setLoaded(false);
    }
  }

  let list;

  if (loaded) {
    list = (
      <ul className='list'>
        <li>
          Title: {information.title}
        </li>
        <li>
          Description: {information.description}
        </li>
        <li>
          URL: {information.url}
        </li>
      </ul>
    );
  }

  return (
    <div className='Search Google Scholar'>
      <form onSubmit={submitSearch}>
        <input type="search" placeholder="Search Google Scholar" onChange={updateQuery} />
        <button type="submit">Search</button>
      </form>
      {list}
    </div>
  )
  */

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("e3d9e4feb1a94f6069e31adeffdf03923a68be6ad7fdec4a892d9a287a11a78c");


    const params = {
      engine: "google_scholar",
      // query should be the input from search box
      q: query
    };

    const callback = function (data) {
      //console.log(data["organic_results"]);
      results = data["organic_results"];
      //console.log(results[0].title);
      //resultsArr = results;
      const resultList = resultsArr.map(paper => {

        return (
          <ul>
            <li>
              {paper.title}
            </li>
            <li>
              {paper.link}
            </li>
          </ul>
        )
        console.log(paper.title);
        console.log(paper.link);
        console.log(paper.inline_links.cited_by.serpapi_scholar_link);
      }
      )
      return (
        <div>
          {resultList}
        </div>
      )


    }

    // Show result as JSON
    search.json(params, callback);





  };


  return (
    <div>
      {/* Google Scholar Search box*/}
      <div className='flex-grow'>
        <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
bg-gray-100 py-1 px-3'>
          <FaSearch className='text-cyan-600 h-6 w-10' />
          <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Google Scholar' onChange={handleChange} value={query} />
          <button type='submit' hidden onClick={handleClick} />
          <a href='GoogleScholarResults'>
            Search
          </a>
        </form>
      </div >

      <div>
//scholar results here

      </div>
    </div>


  )


}

export default GoogleScholar