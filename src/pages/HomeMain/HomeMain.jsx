import React from 'react'
import Posts from '../../components/Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'
import './homeMain.css'

const HomeMain = () => {
  return (
    <>
        <div className="homeMain">
            <Posts/>
            <SideBar/>
        </div>
    </>
  )
}

export default HomeMain