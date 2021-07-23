import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../actions/notes'
import { Loader } from '../Loader/Loader'
import { PostEdit } from './PostEdit'

export const EditScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)
    
    const {id} = useParams()

    useEffect(()=>{
        dispatch( getPostById(id) )
    },[id, dispatch])

    return (
        <>
            {
                loading ? <Loader/>
                :
                <PostEdit/>
            }
        </>
    )
}
