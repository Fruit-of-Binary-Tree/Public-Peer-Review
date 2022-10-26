import GoogleScholarFeed from '../components/GoogleScholarFeed';
import React from 'react';

function GoogleScholarHome() {

    return (

        <div className='flex-row'>
            <div className='flex items-center '>
                <a href='./Home'>Home</a>
            </div>
            <GoogleScholarFeed />
        </div >
    )

}
export default GoogleScholarHome