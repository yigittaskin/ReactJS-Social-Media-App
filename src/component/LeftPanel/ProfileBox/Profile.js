import React from 'react'
import ProfileImage from '../../../img/ornek.svg'
import './Profile.css'

const Profile = () => {
  return (
    <div className="container">
      <div id='profile' className='container d-flex mt-5'>
        <img src={ProfileImage} alt="Profile"/>
        <div id='user-info' className="container">
          <h3 id='user-name'>Yiğit Taşkın</h3>
          <p id='user-tag'>@taskinYGT</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
