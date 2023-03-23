import React from 'react'
import { 
    BrowserRouter as Router, 
    Routes,
    Route,
    } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SettingsPage from '../pages/settings/SettingsPage';
import Single from '../pages/single/Single';
import WritePage from '../pages/writePage/WritePage';

const AppRouter = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={< HomePage/>} />
                <Route path='/single' element={< Single/>} />
                <Route path='/write' element={< WritePage/>} />
                <Route path='/settings' element={< SettingsPage/>} />
                <Route path='/login' element={< LoginPage/>} />
                <Route path='/register' element={< RegisterPage/>} />
                
            </Routes>
        </Router>  

    </>
  )
}

export default AppRouter