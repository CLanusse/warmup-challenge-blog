import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../actions/notes'
import { Loader } from '../Loader/Loader'
import { PostDetail } from './PostDetail'

export const DetailScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)
    
    const {id} = useParams()

    useEffect(()=>{
        dispatch( getPostById(id) )
    },[id, dispatch])

    return (
       
        <div className="container px-4 px-lg-5 mt-5 ">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
            {
                loading ? <Loader/>
                :
                <PostDetail/>
            }
                </div>
            </div>
        </div>
    )
}
