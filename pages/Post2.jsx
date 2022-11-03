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
function Post2({id,username,caption,url,title,author, viewPdf,creator, description, del}) 
{

  return (
    
    <div className='px-5 py-5'>

        <span>author= </span>
            {author}

            <div className='py-1'>
            <span>title: </span>
                "{title}"

                <div className='py-1'>
                    <span>description: </span>
                        "{description}"
                    
                        <div className='py-1'>
                        <span>url: </span>
                            "{url}"
                        </div>
                </div>

            </div>
    </div>
  )
}

export default Post2

// function UseState(arg0: never[]): { comments: any; setComments: any; } {
//   throw new Error('Function not implemented.');
// }