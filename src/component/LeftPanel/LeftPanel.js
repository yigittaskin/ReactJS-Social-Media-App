import React from 'react'
import Menu from './Menu/Menu'
import Profile from './ProfileBox/Profile'
import Logo from '../../img/logo.svg'
import './LeftPanel.css'

const LeftPanel = () => {
  return (
    <div className='container-fluid col-md-3 sticky-top'>
    <div id='left-panel' className="container">
    <img src={Logo} alt="Logo" style={{marginTop: 30, marginLeft:10}}/> 
    <Profile />
    <Menu />
    </div>
    </div>
  )
}

export default LeftPanel
