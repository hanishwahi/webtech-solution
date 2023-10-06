import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <div>
            <div id="thankyou">
                <h2 id="h2thankyou">Thank you!</h2>
            </div>
            <div className='text-center'>
                <Link id="linkback" to='/'>Take me back please!</Link>
            </div>
        </div>
    )
}

export default Thankyou