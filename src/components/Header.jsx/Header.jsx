import React from 'react'
import './header.css'

const imgHeader = require('../../assets/header.jpg')
const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img src={imgHeader} alt="" className="headerImg" />
    </div>
  )
}

export default Header