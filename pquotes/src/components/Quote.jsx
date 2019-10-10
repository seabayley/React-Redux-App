import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Fade from '@material-ui/core/Fade';

export default () => {
    const [fade, setFade] = useState(false)
    const quote = useSelector(state => state.quote)
    return (
        <div className='quote'>
            <p>{quote.text}</p>
            <p className='author'>-{quote.author}</p>
        </div>
    )
}