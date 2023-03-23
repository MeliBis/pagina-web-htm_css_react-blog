import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import TopBar from '../../components/TopBar/TopBar'
import './single.css'

const Single = () => {
  return (
    <>
        <TopBar/>
        <div className='single'>
            <SinglePost/>
            <SideBar/>
            

        </div>
    </>
  )
}

export default Single