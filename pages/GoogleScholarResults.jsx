import React from 'react'
import sR from '../api.json'
import PostGoogleScholar from '../pages/PostGoogleScholar';

function GoogleScholarResults() {
    return (
        <div className='results'>
            <ul>
                {sR.map(paper => (
                    <PostGoogleScholar
                        id={paper.result_id}
                        // username={Post.data().username}
                        title={paper.title}
                        author={paper.publication_info.summary}
                        description={paper.snippet}
                        url={paper.link}
                        creator={"Google Scholar"}

                    />

                ))}
            </ul>
        </div>

    );
}

export default GoogleScholarResults