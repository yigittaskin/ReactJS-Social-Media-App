import React from 'react'
import './Bildirim.css'
import ProfileNot from '../../../../img/profile.jpg'

const Bildirim = () => {
  return (
    <div className='container-fluid mt-5 p-0'>
      <div id='notification-info' className="container d-flex p-0 align-items-center">
        <div>
          <img id='notification-profile-photo' src={ProfileNot} className="img-fluid" alt="profil" width={50} height={50} />
        </div>
        <p id='notification-text'>Yiğit wants to add you to friend.</p>
      </div>
      <div id='notification-info' className="container justify-content-between d-flex p-0 mt-2 align-items-center">
        <button id='accept-btn' className='btn button-not'>Accept</button>
        <button id='decline-btn' className='btn button-not'>Decline</button>
      </div>
    </div>
  )
}

export default Bildirim
