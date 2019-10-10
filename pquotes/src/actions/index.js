import axios from 'axios'

export const FETCH_QOD_START = 'FETCH_QOD_START'
export const FETCH_QOD_SUCCESS = 'FETCH_QOD_SUCCESS'
export const FETCH_QOD_FAIL = 'FETCH_QOD_FAIL'

export const getQod = () => dispatch => {
    dispatch({ type: FETCH_QOD_START })
    axios
        .get('http://quotes.rest/qod.json')
        .then(res => dispatch({ type: FETCH_QOD_SUCCESS, payload: res.data.contents.quotes[0] }))
        .catch(err => dispatch({ type: FETCH_QOD_FAIL, payload: err }))
}