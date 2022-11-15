import GoogleScholarFeed from '../components/GoogleScholarFeed';
import React from 'react';
import GSHeader from '../components/GSHeader';

function GoogleScholarHome() {

    return (

        <div className=" bg-zinc-300">
            <GSHeader/>
            <div className='flex flex-row  max-w-5xl'>
                <GoogleScholarFeed />
            </div>


        </div >
    )

}
export default GoogleScholarHome