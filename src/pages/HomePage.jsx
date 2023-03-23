import React from 'react'
import Header from '../components/Header.jsx/Header'
import Posts from '../components/Posts/Posts'
import SideBar from '../components/SideBar/SideBar'
import TopBar from '../components/TopBar/TopBar'
import HomeMain from './HomeMain/HomeMain'
import './stylePage/stylesHome.css'



const HomePage = () => {
  return (
    <div className='home'>
        <TopBar/>
        <Header/>
        <HomeMain/>
        
    </div>
  )
}

export default HomePage