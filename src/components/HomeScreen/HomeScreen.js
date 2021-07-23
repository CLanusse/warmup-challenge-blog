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
            <header className="home-background">   
                    <h1>Alkemy Blog</h1>
            </header>

        {
            loading ? <Loader/>
                :
                <PostsList posts={list}/>    
        }
        </div>
    )
}
