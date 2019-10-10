import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Quote from './components/Quote.jsx'
import { getQod } from './actions'

import CircularProgress from '@material-ui/core/CircularProgress'
import './App.css'

export default () => {
  const dispatch = useDispatch();
  const isFetched = useSelector(state => state.isFetched)

  useEffect(() => {
    dispatch(getQod())
  }, [])

  return (
    <div className="App">
      {!isFetched ? <CircularProgress /> : <Quote />}
    </div>
  )
}