import React from 'react'
import './settingsPage.css'
import TopBar from '../../components/TopBar/TopBar'
import SideBar from '../../components/SideBar/SideBar'


const imgSettings=require('../../assets/Perfil.jpg')

const SettingsPage = () => {
  return (
    <>
        <TopBar />
  
        
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">update your Account</span>
                    <span className="settingsDeleteTitle">Delete your Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label> Profile picture</label>
                    <div className="settingsPP">
                        <img src={imgSettings} className='imgSettings' alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder='Melissa' />
                    <label >Email</label>
                    <input type="email" placeholder='email@email.com' />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsSubmite">Update</button>
                </form>
            </div>
                <SideBar/>
        </div>
    </>
  )
}

export default SettingsPage