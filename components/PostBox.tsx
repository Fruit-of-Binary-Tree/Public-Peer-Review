import React, { useState } from 'react'
import {TiDocument} from 'react-icons/ti'
import {useForm} from 'react-hook-form'

type FormData = {
  postDescription: string
  tagSection: string
}
{/*Under construction*/}

function PostBox() {
  const{
    register,
    watch,
    setValue,
    formState:{errors},
  } =useForm<FormData>()

  return (
  <form className='sticky flex-center top-16 z-50 border-gray-300 bg-zinc-200 p-2'>
    <div className='flex items-center justify-center space-x-2 border border-gray-200 rounded-lg
        bg-zinc-200 py-1 px-3'>
        <div className='min-w-[77px]'></div>
        <input
        {...register('postDescription',{required:true})}
        className='flex-grow rounded-lg mr-2 ml-12 bg-gray-50 p-2 pl-5 outline-none'
        type='text'
        placeholder='Post your work!'
        />
        <TiDocument
        className={'h-7 w-7 cursor-pointer text-gray-700'} />
    </div>

    {
      !!watch('postDescription') && (
        <div className=' flex flex-col py-2'>
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Tags:</p>
            <input
            className='mr-12 flex-1 pl-4 bg-gray-50 p-2 outline-none rounded-lg'
            {...register('tagSection')}
            type='text'
            placeholder='i.e Machine-Learning'
            />
          </div>
        </div>
      )
    } 
  </form>
  )  
  
}

export default PostBox