import React from 'react'
import './Menu.css'
import Home from '../../../img/home.svg'
import Chat from '../../../img/Chat.svg'
import Settings from '../../../img/Settings.svg'
import Saved from '../../../img/Saved.svg'

// İkonlar ilk başta siyah olacak (sadece tıklanan ikon renkli olacak)

const Menu = () => {
    return (
        <div className='container mt-5'>
            <h4>Menu</h4>
            <div id='menu-section' className="container">
                <div className="row">
                    <div className="col-md-12 d-flex" style={{marginTop: 21}}>
                        <img src={Home} alt="" />
                        <h6>Home</h6>
                    </div>
                    <div className="grey-line"></div>
                    <div className="col-md-12 d-flex" style={{marginTop: 21}}>
                        <img src={Chat} alt="" />
                        <h6>Chat</h6>
                    </div>
                    <div className="grey-line"></div>
                    <div className="col-md-12 d-flex" style={{marginTop: 21}}>
                        <img src={Settings} alt="" />
                        <h6>Settings</h6>
                    </div>
                    <div className="grey-line"></div>
                    <div className="col-md-12 d-flex" style={{marginTop: 21}}>
                        <img src={Saved} alt="" />
                        <h6>Saved Posts</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
