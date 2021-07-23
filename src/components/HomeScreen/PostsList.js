import React, { useState } from 'react'
import { Post } from './Post'

export const PostsList = ({posts}) => {

    const [limit, setLimit] = useState(10)

    const showMore = ()=>{
        setLimit(limit + 10)
    }

    return (
        <div>
            {posts.slice(0, limit).map((post) => (
                <Post key={post.id} {...post}/> 
            ))}

            <button onClick={showMore}>Show more</button>
        </div>
    )
}
