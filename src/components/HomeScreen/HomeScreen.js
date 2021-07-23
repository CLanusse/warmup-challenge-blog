import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/notes'
import { Loader } from '../Loader/Loader'
import { PostsList } from './PostsList'

export const HomeScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)
    const {list} = useSelector(state => state.posts)

    useEffect(()=>{
        dispatch( getPosts() )
    }, [dispatch])

    return (    
        <div>
            <h1>Home Screen</h1>
            <hr/>

        {
            loading ? <Loader/>
                :
                <PostsList posts={list}/>    
        }
        </div>
    )
}
