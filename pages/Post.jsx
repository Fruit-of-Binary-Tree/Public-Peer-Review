import React, { useEffect } from 'react'
import {HiOutlineHeart} from 'react-icons/hi'
import {FaComments} from 'react-icons/fa'
import {useSession} from 'next-auth/react';
import {useState} from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import {auth} from '../firebase-config';
import Moment from 'react-moment';
import Rating from '../components/Rating'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {HeartIcon} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase-config";
import { v4 } from "uuid";
//{id:any,username:any,caption:any,key:any,title:any,author:any,url:any,viewPdf:any,doc:any}
function Post({id,username,caption,url,title,author, viewPdf,creator, description, del}) 
{
  // const {data:session}=useSession();
  const [comment, setComment] = useState("");
  const [comments,setComments] = useState([]);
  const [pdfFile,setPdfFile]=useState(null);

  const handleFile =(e) =>{
    let selectedFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
  }

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const storageListRef = ref(storage, "files/");
  
  const uploadFile = () => {
    if (imageUpload == null) return;
    const storageRef = ref(storage, `files/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(storageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const [likes,setLikes] = useState([]);
  const [hasLiked, sethasLiked] = useState(false);

  const [likes2,setLikes2] = useState([]);
  const [hasLiked2, sethasLiked2] = useState(false);

  useEffect(
    () =>
    onSnapshot(
      query(
        collection(db,'posts',id,'comments'),
        orderBy('timestamp','desc')
        ),
        (snapshot) => setComments(snapshot.docs)
        ),
  [db,id]);

  useEffect(
    () =>
    onSnapshot(
        collection(db,"posts",id,"likes"),
       
        (snapshot) => setLikes(snapshot.docs)
        ),
  [db]);

  useEffect(
    () => 
      sethasLiked(
        likes.findIndex((like) => like.id === auth.currentUser?.uid) !== -1
      ),
     [likes]
  );

  useEffect(
    () =>
    onSnapshot(
        collection(db,"posts",id,"likes2"),
       
        (snapshot) => setLikes2(snapshot.docs)
        ),
  [db]);

  useEffect(
    () => 
      sethasLiked2(
        likes2.findIndex((like2) => like2.id === auth.currentUser?.uid) !== -1
      ),
     [likes2]
  );

  const sendComment =async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db,'posts',id,'comments'),{
      comment:commentToSend,
      creator: {name:auth.currentUser?.displayName,id:auth.currentUser?.uid},
      // username:session.user.creator,
      timestamp:serverTimestamp(),
    })
  }

  const likePost = async () => {
    if (hasLiked){
      await deleteDoc(doc(db, "posts", id, "likes", auth.currentUser?.uid));
    }
    else{
      await setDoc(doc(db, 'posts', id, 'likes', auth.currentUser?.uid), {
        name:auth.currentUser?.displayName,
      });
    }
  };

  const likePost2 = async () => {
    if (hasLiked2){
      await deleteDoc(doc(db, "posts", id, "likes2", auth.currentUser?.uid));
    }
    else{
      await setDoc(doc(db, 'posts', id, 'likes2', auth.currentUser?.uid), {
        name:auth.currentUser?.displayName,
      });
    }
  };

 

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

      {/*title */}
      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>Title:</span>
        {title}
      </div>

      {/*Description */}
      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>Description:</span>
        {description}
      </div>

      {/*URL */}
      <div className='p-5 truncate'>
      <span className='p-5 truncate font-semibold text-cyan-600'>URL:</span>
        {url}
      </div>

    {/*DELETE */}
    <div className='p-5 truncate'>
        {del}
      </div>


      {/*Buttons */}
      <div className='px-4 pt-4 pb-4'>
        <div className='flex space-x-4 '>
          <p>If you liked the readibility please like the post</p>
          {
            hasLiked ? (
              <HeartIconFilled onClick={likePost} className='btn text-red-500' />
            ) : (
              <HeartIcon onClick={likePost} className='btn'/>
            )}
        </div>

        <div className='flex space-x-4 '>
          <p>If you liked the usefulness please like the post</p>
          {
            hasLiked2 ? (
              <HeartIconFilled onClick={likePost2} className='btn text-red-500' />
            ) : (
              <HeartIcon onClick={likePost2} className='btn'/>
            )}
        </div>

        <div>
        <input className="form-control border-2 mt-3 border-white rounded-lg px-4 py-2 inline-block font-semibold" 
                type="file" id="customFile" onChange={(event) => {setImageUpload(event.target.files[0]);}}/>
        <button onClick={uploadFile}
                className='border-2 mt-5 border-white rounded-full px-10 py-2 inline-block font-semibold mr-5 text-white
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Upload file</button>  
        
        
        </div>

        {imageUrls.map((url) => {
        return <embed src={url} />;
      })}

      <a href='./Bibtex' 
                className='border-2 mt-5 border-white rounded-full px-10 py-2 inline-block font-semibold text-white
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Bibtex</a>  

          
        
      </div>

      <p className='flex space-between items-center p-4'>
        {likes.length > 0 && (
          <p className="font-bold mb-1"> The average liking of the paper is : {(likes.length + likes2.length)/2} </p>
        )}
      </p>
      

      {/*Comments */}
      {comments.length >0 && (
        <div className=' ml-2 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) =>(
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
            <span></span>
            <p className='flex-1'><span className='font-bold text-cyan-600'>{comment.data().creator.name}</span><span className='px-1'> </span>{comment.data().comment}</p>
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
