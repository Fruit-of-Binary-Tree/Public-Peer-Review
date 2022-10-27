import GoogleScholarFeed from '../components/GoogleScholarFeed';
import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa'

function GoogleScholarHome() {

    return (

        <div className='sticky top-0 z-50 flex justify-between bg-zinc-300 px-4 py-2 shadow-sm '>
            <div className='flex items-center text-cyan-600 font-semibold text-lg'>
                <FaHome className='h-6 w-6 mr-1' />
                <a href='./Home'>Home</a>
            </div>
            <GoogleScholarFeed />
        </div >
    )

}
export default GoogleScholarHome