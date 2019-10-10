import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import Quote from './components/Quote.jsx'
import { getQod } from './actions'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const dispatch = useDispatch();
  const isFetched = useSelector(state => state.isFetched)

  useEffect(() => {
    dispatch(getQod())
  }, [])

  return !isFetched ?
    <div>
      <CircularProgress />
    </div>
    :
    <div className="App">
      <Quote />
    </div>
}

export default App;
