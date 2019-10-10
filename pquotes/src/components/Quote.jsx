import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
    const quote = useSelector(state => state.quote)
    return (
        <div className='quote'>
            <p>{quote.text}</p>
            <p className='author'>-{quote.author}</p>
        </div>
    )
}