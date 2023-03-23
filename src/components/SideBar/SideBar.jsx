import React from 'react'
import './sideBar.css'


const imgSideBar = require('../../assets/sideBar.jpg')
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sideBarItem">
            <span className="sideBarTitle">About me</span>
            <img src={imgSideBar}className='sideBar_img' alt="imagen sidebar" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis eveniet vitae !</p>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem"> dates</li>
            <li className="sideBarListItem">Learning</li>
        </ul>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">Follow me</span>
        <div className="sideBarSocial">
            <i class="sideBarIcon fa-brands fa-square-facebook"></i>
            <i class="sideBarIcon fa-brands fa-square-instagram"></i>
            <i class="sideBarIcon fa-brands fa-github"></i>
        </div>

        </div>
    </div>
  )
}

export default SideBar