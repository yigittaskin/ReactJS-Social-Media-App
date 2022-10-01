import React from 'react'
import Search from './Search/Search'
import Notification from './Notification/Notification';

const RightPanel = () => {
  return (
    <div className='container col-md-3'>
      <Search />
      <Notification />
    </div>
  )
}

export default RightPanel
