import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostDetail = () => {

    
    const {active} = useSelector(state => state.posts)
    
    
    
    return (
        <>
        {active ?
            <div>
                <h2>{active.title}</h2>
                <p>{active.body}</p>      
                <Link to="/" className="btn btn-outline-primary">Go back</Link>        
            </div>

            :
            <div>
                <h2>Requested post not found</h2>
                <Link to="/">Return to main screen</Link>
            </div>
        }
        </>
    )
}
