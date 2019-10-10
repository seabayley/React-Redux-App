import {
    FETCH_QOD_START,
    FETCH_QOD_SUCCESS,
    FETCH_QOD_FAIL
} from '../actions'

const initialState = {
    quote: {
        text: "",
        author: "",
        tags: [],
        backgroundImg: ''
    },
    error: '',
    isFetching: false,
    isFetched: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QOD_START: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case FETCH_QOD_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                quote: {
                    text: action.payload.quote,
                    author: action.payload.author,
                    tags: action.payload.tags,
                    backgroundImg: action.payload.background
                }
            }

        }
        case FETCH_QOD_FAIL: {
            return {
                ...state,
                isFetching: false,
                errror: action.payload
            }
        }
        default: {
            return state
        }
    }
}