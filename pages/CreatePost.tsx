import React, { useState } from 'react'
import {FaUniversity, FaUser, FaQuoteLeft, FaLink } from 'react-icons/fa'
import {FiAlignJustify} from 'react-icons/fi'
import { SiAcademia } from "react-icons/si";
import { Alert } from 'react-bootstrap'
import PaperDataService from "../services/paper.services"
import {auth} from '../firebase-config'


function Post() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [university, setUniversity] = useState("");
  const [citations, setCitation] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e: { preventDefault: () => void })  => {
    e.preventDefault();
    if(title == "" || author == "" || url == "" || description == "" || university == "" || citations == ""){
      setMessage({ error: true, msg: " all fields are mandatory!"});
      return;
    }
    const newPaper = {
      title,
      author,
      url,
      description,
      university,
      citations,
      creator: {name:auth.currentUser?.displayName,id:auth.currentUser?.uid},
    }
    console.log(newPaper);

    try{
      await PaperDataService.addPaper(newPaper);
      setMessage({error: false, msg: " new paper added!"});
    }
    catch (err){
      //setMessage({error: true });
    }

    setTitle("");
    setAuthor("");
    setURL("");
    setDescription("");
    setCitation("");
    setUniversity("");
  };
  
  return (
    <form className='sticky flex-center top-16 z-50 border-gray-300 bg-zinc-200 p-2' onSubmit={handleSubmit}>
    {message?.msg && (
      <Alert>
        {message?.error ? "Danger" : "Success"}
          {message?.msg}
      </Alert>
    )}
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100
    w-full h-full bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_1280.jpg')]">
    
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className="bg-cyan-600 border-cyan-50 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-2/5 p-5">
            <div className='text-left font-bold'>
            {/*Name of company*/}
            <span className='text-white text-3xl'>Genius</span>
            <span className='text-black text-3xl'>Reviews</span>
            <div className='py-5'>Create your post here...</div>
            <div className='px-48 py-10'>

                <div className='bg-gray-100 w-96 p-2 flex items-center mb-3 rounded-md'>
                    <FaUser className='text-gray-400 mr-2'/>
                    <input type="text" name='author' placeholder='Author' value = {author} onChange = {(e) => setAuthor(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>
            
                <div className='bg-gray-100 w-96 p-2 flex items-center mb-3 rounded-md'>
                    <FaUniversity className='text-gray-400 mr-2'/>
                    <input type="text" name='university' placeholder='University' value = {university} onChange = {(e) => setUniversity(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>

                <div className='bg-gray-100 w-96 p-2 flex items-center mb-3 rounded-md'>
                    <SiAcademia className='text-gray-400 align-center mr-2'/>
                    <input type="text" name='title' placeholder='Title' value = {title} onChange = {(e) => setTitle(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>

                <div className='bg-gray-100 w-96 h-32 p-2 flex items-start mb-3 rounded-md'>
                    <FaQuoteLeft className='text-gray-400 mr-2'/>
                    <input type="text" name='tags' placeholder='Tags' value = {citations} onChange = {(e) => setCitation(e.target.value)} className='bg-gray-100 outline-none text-sm '></input>
                </div>

                <div className='bg-gray-100 w-96 h-32 p-2 flex items-start mb-3 rounded-md'>
                    <FiAlignJustify className='h-5 w-5 text-gray-400 align-center mr-2'/>
                    <input type="text" name='description' placeholder='Description of publication' value = {description} onChange = {(e) => setDescription(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>

                <div className='bg-gray-100 w-96 h-16 p-2 flex items-start mb-3 rounded-md'>
                    <FaLink className='h-4 w-4 text-gray-400 align-center mr-2'/>
                    <input type="text" name='url' placeholder='Url' value = {url} onChange = {(e) => setURL(e.target.value)} className='bg-gray-100 outline-none text-sm flex-1'></input>
                </div>

                <label className="text-center form-label w-64 px-44 text-white" form="customFile">OR</label>

                <input className="form-control border-2 mt-3 border-white rounded-lg px-4 py-2 inline-block font-semibold" 
                type="file" id="customFile" />
                
                <div className='flex flex-row px-14'>
                <button type='submit'
                className='border-2 mt-5 border-white rounded-full px-10 py-2 inline-block font-semibold mr-5 text-white
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Submit</button>  
                
                <a href='./Home' 
                className='border-2 mt-5 border-white rounded-full px-10 py-2 inline-block font-semibold text-white
                hover:bg-white hover:text-cyan-600 transition ease-out duration-500'>Cancel</a>  
                </div>

            </div>
            </div>
            </div> {/*End of form*/}

        </div>
      </main>
   
    </div>
    </form>
  )
}

export default Post
//<label class="form-label" for="customFile">Default file input example</label>
//<input type="file" class="form-control" id="customFile" />
