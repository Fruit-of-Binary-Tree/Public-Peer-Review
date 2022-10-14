import React from 'react'
import results from '../api.json'

function GoogleScholarResults() {
    return (
        <div className='results'>
            {
                results.map(paper => {
                    return (
                        <div className='box' key={paper.position}>
                            {paper.title}<br></br>
                            {paper.link}<br></br>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default GoogleScholarResults