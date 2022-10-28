import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'

function GSHeader() {
  return (
    <div className='sticky top-0 z-50 flex bg-zinc-300 py-2 shadow-sm '>
        <div className='text-left mx- 10 font-bold px-5'>
                    {/*Title*/}
                    <span className='text-cyan-600 text-2xl'>Genius</span>
                    <span className='text-black text-2xl'>Reviews</span>
        </div>
        
         {/* Home icon and styling used for refreshing page */}
        <div className='flex py-1 mb-4 mr-6 items-center text-cyan-600 font-semibold text-lg'>
            <FaHome className='h-6 w-6 mr-1 ' />
            <a href='./Home'>Home</a>

            <a href='./GoogleScholar' className='px-7'>Search Google Scholar</a>
        </div>


    </div>
  )
}

export default GSHeader