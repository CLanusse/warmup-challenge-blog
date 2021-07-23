import React, { useState } from 'react'
import { Post } from './Post'

export const PostsList = ({posts}) => {

    const [limit, setLimit] = useState(10)

    const showMore = ()=>{
        setLimit(limit + 10)
    }

    return (
        <div className="container px-4 px-lg-5 mt-4">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    {posts.slice(0, limit).map((post) => (
                        <Post key={post.id} {...post}/> 
                        ))}
                </div>
            </div>

            <div className="d-flex justify-content-end mb-4">
               <button onClick={showMore} className="btn btn-primary text-uppercase btn-more">Show more →</button>
            </div>
        </div>
    )
}
