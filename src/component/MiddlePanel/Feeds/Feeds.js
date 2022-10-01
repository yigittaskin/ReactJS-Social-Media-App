import React from 'react'
import Feed from './Feed/Feed';

const Feeds = () => {
  return (
    <div className='container mt-3'>
      <div className="container feeds-header d-flex justify-content-around w-100">
        <h4 className='mt-2'>Feeds</h4>
        <div className="header-list d-flex justify-content-around">
          <h6 className='ml-2'>All</h6>
          <h6 className='ml-2'>Following</h6>
          <h6 className='ml-2'>Populer</h6>
          <h6 className='ml-2'>Newest</h6>
        </div>
      </div>
      <Feed />
      <Feed />
      <Feed />
    </div>
  )
}

export default Feeds
