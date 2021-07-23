import axios from "axios"
import Swal from "sweetalert2"
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success ml-4',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

export const getPosts = () => {
    return (dispatch) => {
        dispatch( startLoading() )

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                dispatch({
                    type: types.postList,
                    payload: data
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong...',
                    text: err
                  })
            })
            .finally(()=> dispatch( finishLoading() ))
    }
}

export const getPostById = (id) => {
    return (dispatch) => {
        dispatch( startLoading() )

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({data})=>{
                dispatch({
                    type: types.postActive,
                    payload: data
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Not found',
                    text: err
                  })
            })
            .finally(()=> dispatch( finishLoading() ))
    }
}

export const createPost = (values) => {
    return (dispatch) => {
        dispatch( startLoading() )

        axios.post('https://jsonplaceholder.typicode.com/posts', values)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    title: 'Your post has been created!',
                    text: `New post: ${values.title}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: '¡Great!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.replace('/')
                    }
                  })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong...',
                    text: err
                  })
            })
            .finally(()=> dispatch( finishLoading() ))
    }
}

export const editPost = (values, id) => {
    return (dispatch) => {
        dispatch( startLoading() )

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, values)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    title: 'Your post has been updated!',
                    text: `Changed: ${values.title}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: '¡Great!'
                  })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong...',
                    text: err
                  })
            })
            .finally(()=> dispatch( finishLoading() ))
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch( startLoading() )

                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then((res) => {
                        
                        swalWithBootstrapButtons.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        dispatch( clearActivePost() )
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Something went wrong...',
                            text: err
                          })
                    })
                    .finally(()=> dispatch( finishLoading() ))
            }
          })
    }
}

export const clearActivePost = () => (
    {
        type: types.postActiveClear
    }
)
export const clearPosts = () => (
    {
        type: types.postClear
    }
)