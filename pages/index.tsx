import type { NextPage } from 'next'
import Login from './Login'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className=''>
    <Head>
    <title>Public Peer Review</title>
    </Head>
    <Login/>

    </div>
    
   
  )
}

export default Home
