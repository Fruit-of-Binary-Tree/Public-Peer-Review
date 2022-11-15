import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'

function GSHeader() {
  return (
    <div className='sticky flex border-2 border-cyan-600 top-0 z-50  bg-zinc-300 shadow-sm '>
        <div className='text-left mx- 10 font-bold px-5 py-3'>
                    {/*Title*/}
                    <span className='text-cyan-600 text-2xl'>Genius</span>
                    <span className='text-black text-2xl'>Reviews</span>
        </div>
        
         {/* Home icon and styling used for refreshing page */}
        <div className='flex mb-4 mr-6  text-cyan-600 font-semibold text-lg py-4 '>
            <FaHome className='flex h-6 w-6 mr-1' />
            <a href='./Home'>Home</a>

            <a href='./GoogleScholar' className='px-7'>Search Google Scholar</a>
        </div>


    </div>
  )
}

export default GSHeader