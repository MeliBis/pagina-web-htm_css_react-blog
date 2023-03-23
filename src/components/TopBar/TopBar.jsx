import React from 'react'
import './topBar.css'
import {
  Link
} from "react-router-dom";
const imgTopBar =require("../../assets/Perfil.jpg")


const TopBar = () => {
  return (
    <div className='top'>
       <div className="topLeft">
        <i class="top-icon fa-brands fa-square-facebook"></i>
        <i class="top-icon fa-brands fa-square-instagram"></i>
        <i class="top-icon fa-brands fa-github"></i>
        </div>
        
       <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to='/'className='link'>
              Home
            </Link>
            </li>
          <li className="topListItem">
          <Link to='/settings'className='link'>
          Create
            </Link>
            </li>
            <li className="topListItem">
            <Link to='/write'className='link'>Write</Link>
          </li>
          <li className="topListItem">
          <Link to='/single' className='link'>
          Post
            </Link>
            </li>
          
          <li className="topListItem">
          <Link to='/login'className='link'>Login</Link></li>
        </ul>
       </div>
       <div className="topRight">
        <img src={imgTopBar}className='topImg' alt='Imagen usuario' />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}

export default TopBar