import React, { useEffect } from 'react'
import {HiOutlineHeart} from 'react-icons/hi'
import {FaComments} from 'react-icons/fa'
import {useSession} from 'next-auth/react';
import {useState} from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase-config';
import Moment from 'react-moment';
import Rating from '../components/Rating'

//{id:any,username:any,caption:any,key:any,title:any,author:any,url:any,viewPdf:any,doc:any}
function Post({id,username,caption,url,title,author, viewPdf,creator}) 
{
  // const {data:session}=useSession();
  const [comment, setComment] = useState("");
  const [comments,setComments] = useState([]);

  useEffect(
    () =>
    onSnapshot(
      query(
        collection(db,'posts',id,'comments'),
        orderBy('timestamp','desc')
        ),
        (snapshot) => setComments(snapshot.docs)
        ),
  [db]);

  const sendComment =async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db,'posts',id,'comments'),{
      comment:commentToSend,
      // username:session.user.creator,
      timestamp:serverTimestamp(),
    })
  }

  return (
    
    <div className='bg-gray-100 my-7 border rounded-lg border-cyan-600'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <p className='flex-1 font-bold'>{creator}</p>
      </div>

      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>Author:</span>
        {author}
      </div>

      {/*Description */}
      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>Title:</span>
        {title}
      </div>

      {/*URL */}
      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>URL:</span>
        {url}
      </div>

      {/*Document */}
      <div className='pdfContainer'> 
      
      </div>

      {/*Buttons */}
      <div className='px-4 pt-4 pb-4'>
        <div className='flex space-x-4 '>
          <Rating/>
        <FaComments className='btn' />
        </div>
      </div>

      {/*Comments */}
      {comments.length >0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) =>(
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
            <span></span>
            <p className='flex-1'><span className='font-bold'>Que Sera</span><span>   </span>{comment.data().comment}</p>
            <Moment fromNow className='flex pr-5 text-xs'>
              {comment.data().timestamp?.toDate()}
            </Moment>
            </div>
          ))}
        </div>
      )}

      {/*input box for comments */}
      <form className='flex space-between items-center p-4'>
        <input
        type="text"
        value={comment}
        onChange={e=>setComment(e.target.value)}
        placeholder='Add a comment...  '
        className='border-none flex-1 focus:ring-0 outline-none border rounded-sm outline-gray-400 mr-3'
        />
        <button 
        type='submit' 
        disabled={!comment.trim()} 
        onClick={sendComment}
        className='font-semibold text-blue-400'>Post</button>

      </form>


    </div>
  )
}

export default Post

// function UseState(arg0: never[]): { comments: any; setComments: any; } {
//   throw new Error('Function not implemented.');
// }
