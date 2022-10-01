import React from 'react'
import Bildirim from './Bildirim/Bildirim';

const Notification = () => {
  return (
    <div className='container mt-5'>
      <div className="container-fluid d-flex justify-content-between">
        <h5>Notifications</h5>
        <p style={{color:'#0851FF'}}>See All</p>
      </div>
      <div className="container-fluid p-0">
        <Bildirim />
        <Bildirim />
        <Bildirim />
      </div>
    </div>
  )
}

export default Notification
