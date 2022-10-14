import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Post from './Post';


function GoogleScholar() {
  const [keyWords, searchKeyWords] = useState('');
  //const [resultPapers, listPapers] = useState([])

  const handleChange = (event) => {
    searchKeyWords(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    searchWords(keyWords);
  }

  //Search Google Scholar Function
  const searchWords = async (searchValue) => {
    searchKeyWords(searchValue);

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("e3d9e4feb1a94f6069e31adeffdf03923a68be6ad7fdec4a892d9a287a11a78c");

    const params = {
      engine: "google_scholar",
      // query should be the input from search box
      q: searchValue
    };

    const callback = function (data) {
      //console.log(data["organic_results"]);
      const resultPapers = data["organic_results"];
    };
    // Show result as JSON
    const results = search.json(params, callback);

  };

  const displayResults = (resultPapers) => {
    const listPapers = resultPapers.map(
      (element) => {
        return (
          <ul>
            <li>
              {element.title}
            </li>
            <li>
              {element.link}
            </li>
            <li>
              {element.link}
            </li>
          </ul>
        )
      }
    )

    return (
      <div>
        {listPapers}
      </div>
    )
  }


  return (

    // {/* Google Scholar Search box*/}
    <div className='flex-grow'>
      <form className='flex items-center space-x-2 border border-cyan-600 rounded-lg
            bg-gray-100 py-1 px-3'>
        <FaSearch className='text-cyan-600 h-6 w-10' />
        <input className='bg-transparent outline-none text-cyan-600' type='text' placeholder='Search Google Scholar' onChange={handleChange} value={keyWords} />
        <button type='submit' hidden onClick={handleClick} />
      </form>

      <div>

        {displayResults}

      </div>


    </div>
  )
}

export default GoogleScholar