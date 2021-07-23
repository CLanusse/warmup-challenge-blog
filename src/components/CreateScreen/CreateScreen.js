import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../actions/notes'
import { Loader } from '../Loader/Loader'


export const CreateScreen = () => {
    
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const initialValues = { title: '', body: '' }

    const onSubmit = (values) => { dispatch( createPost(values) ) }
    const validate = (values) => {
        let errors = {}
        if (!values.title) {
            errors.title = 'Required';
        }
        if (!values.body) { 
            errors.body = 'Required' 
        }
        return errors
    }
    
    const formik = useFormik({initialValues, onSubmit, validate})
    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = formik

    return (
        <>
        <div className="container px-4 px-lg-5 mt-5 ">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <h1>Create new post</h1>
                    <hr/>
                { loading ? <Loader/>
            :
        
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title: </label>
                            <input
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Title"
                                className="form-control mb-2"
                                autoComplete="off"
                            />
                            {(touched.title && errors.title) ? <small className="error alert-danger">{errors.title}</small> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Content: </label>
                            <textarea
                                name="body"
                                value={values.body}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Write here..."
                                className="form-control mb-2 form-content"
                                autoComplete="off"
                            ></textarea>
                              
                            {(touched.body && errors.body) ? <small className="error alert-danger">{errors.body}</small> : null}
                        </div>

                        <button
                            className="btn mt-2 btn-block btn-outline-primary"
                            type="submit"
                        >
                            Create
                        </button>
                    </form>
        }
                </div>
            </div>
        </div>  
        
    </>
    )
}
