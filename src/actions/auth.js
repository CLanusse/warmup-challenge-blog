import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";

export const startLogin = (userValues) => {
    return (dispatch) => {
        dispatch( startLoading() )

        axios.post('http://challenge-react.alkemy.org/', userValues)
            .then( ({data}) => {
                dispatch( login(data.token) )
                localStorage.setItem('user', JSON.stringify({
                    uid: data.token
                }))
            })
            .catch( err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized...',
                    text: 'Check your email and password!'
                  })
            })
            .finally(()=> dispatch(finishLoading()))
    }
}

export const login = (uid) => (
    {
        type: types.login,
        payload: {
            uid
        }
    }
)

export const logout = () => {
    localStorage.removeItem('user')
    return {
        type: types.logout
    }
}