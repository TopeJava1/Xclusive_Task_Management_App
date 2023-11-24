import React from 'react'
import './index.css'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='logman'>
        <div className='logman-box'>
            <h1>Lgin</h1>
            <form action="">
                <input type='text' placeholder='Enter your Username or Email'/>
                <input type='password' placeholder='Enter your Password'/>
                <button>Login</button>

                </form>
                <p> Don't have an account yet? <Link> Signup</Link> </p>
g
        </div>
    </div>
  )
}

export default Login