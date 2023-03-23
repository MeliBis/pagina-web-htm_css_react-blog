import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import './registerPage.css'

const RegisterPage = () => {
  return (
    <>
      <TopBar/>
      <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
          <label >User</label>
          <input type="text"className='registerInput' placeholder='Enter your user' />
          <label >Email</label>
          <input type="email" className='registerInput' placeholder='Enter your email'/>
          <label >Password</label>
          <input type="password" className='registerInput' placeholder='Enter your password'/>
          <button className="registerButton">Register</button>
        </form>
        <Link className="registerLoginButton">Login</Link>

      </div>
    
    
    </>
  )
}
   

export default RegisterPage