import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import './loginPage.css'

const LoginPage = () => {
  return (
    <>
      <TopBar/>
      <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
          <label >Email</label>
          <input type="email"className='loginInput' placeholder='Enter your email' />
          <label >Password</label>
          <input type="password" className='loginInput' placeholder='Enter your password'/>
          <button className="loginButton">Login</button>
        </form>
        <Link to='/register' className="loginRegisterButton">Register</Link>

      </div>
    
    
    </>
  )
}

export default LoginPage