import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, editPost } from '../../actions/notes'

export const PostEdit = () => {

    const dispatch = useDispatch()
    const {active} = useSelector(state => state.posts)
    
    const initialValues = {
        title: active?.title,
        body: active?.body
    }

    const onSubmit = (values) => { dispatch( editPost(values, active.id) )}
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

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch( deletePost(active.id) )
    }

    return (
        <>
        {active ?
            <div>
                <h2>Edit</h2>
                <hr/>

                <div className="row">
                    <div className="col-md-5 col-sm-12">
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
                                    className="form-control mb-2"
                                    autoComplete="off"
                                ></textarea>
                                
                                {(touched.body && errors.body) ? <small className="error alert-danger">{errors.body}</small> : null}
                            </div>

                            <button
                                className="btn mt-2 btn-block btn-outline-success"
                                type="submit"
                            >
                                Save changes
                            </button>
                            <button
                                className="btn mt-2 btn-block btn-danger"
                                onClick={handleDelete}
                            >
                                Delete this post
                            </button>
                        </form>
                    </div>
                </div>
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
