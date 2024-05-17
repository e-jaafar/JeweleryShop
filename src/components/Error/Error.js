import React from 'react'
import "./Error.css"
import { NavLink, useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()

    return (
        <div className='divError'>
            <p className='pError'>{error?.error?.toString() ?? error?.toString}</p>
            <NavLink to={'/'}>Return: Home</NavLink>
        </div>
    )
}

export default Error