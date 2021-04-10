import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            
        </div>
    )
}

export default Login
