import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost } from '../../actions/notes'

export const Post = ({id, title}) => {

    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch( deletePost(id) )
    }
    return (
        <>
             <div className="post-preview">
                <h3 className="post-title">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                <div className="btn-container mt-3">
                    <Link to={`/detail/${id}`} className="m-1 btn btn-primary">View</Link>
                    <Link to={`/edit/${id}`} className="m-1 btn btn-success">Edit</Link>
                    <button onClick={handleDelete} className="m-1 btn btn-danger">Delete</button>
                </div>
                <hr class="my-4" />
            </div> 
        </>
    )
}
