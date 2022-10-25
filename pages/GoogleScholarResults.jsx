import React from 'react'
import sR from '../api.json'
import Post from '../pages/Post';

function GoogleScholarResults() {
    return (
        <div className='results'>
            <ul>
                {sR.map(paper => (
                    <Post
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