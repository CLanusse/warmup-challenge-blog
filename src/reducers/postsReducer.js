import { types } from "../types/types"

const initialState = {
    list: [],
    active: null
}

export const postsReducer = (state = initialState, action) => {

    switch( action.type ) {
        case types.postList:
            return {
                ...state,
                list: action.payload
            }
        case types.postClear:
            return initialState
    
        case types.postActive:
            return {
                ...state,
                active: action.payload
            }
        case types.postActiveClear:
            return {
                ...state,
                active: null
            }
        default:
            return state;
    }
}