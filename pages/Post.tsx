import React from 'react'
import {HiOutlineHeart} from 'react-icons/hi'
import {FaComments} from 'react-icons/fa'


function Post({id,username,caption,url,title,author, viewPdf}:
  {id:any,username:any,caption:any,key:any,title:any,author:any,url:any,viewPdf:any,doc:any}) 
{

  return (
    
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <p className='flex-1 font-bold'>We need the name of the user</p>
      </div>

      {/*Description */}
      <div className='p-5 truncate'>
        {title}
        
      </div>

      <div className='p-5 truncate'>
      {url}

      </div>

      {/*Document */}
      <div className='pdfContainer'> 
      
      </div>

      {/*Buttons */}
      <div className='px-4 pt-4 pb-4'>
        <div className='flex space-x-4 '>
        <HiOutlineHeart className='btn'/>
        <FaComments className='btn'/>
        </div>
      </div>

      {/*Comments */}
      <form className='flex items-center p-4'>
        <input
        type="text"
        placeholder='Add a comment'
        className='border-none flex-1 focus:ring-0 outline-none border rounded-sm outline-gray-400 mr-3'
        />
        <button className='font-semibold text-blue-400'>Post</button>

      </form>





    </div>
  )
}

export default Post