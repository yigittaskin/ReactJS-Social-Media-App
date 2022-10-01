import React from 'react'
import './Feed.css'
import Post from '../../../../img/post.svg'
import Photo from '../../../../img/ornek.svg'

const Feed = () => {
  return (
    <div className="container mt-5" style={{borderRadius:32}}>
        <div id='post' className="container text-center bg-white" style={{height:345, maxWidth:459,borderRadius:32, padding:0}}>
          <img src={Post} alt="post" className='img-fluid' style={{borderRadius:32}}/>
          <div className="container-fluid bg-white d-flex" style={{borderRadius:32}}>
            <div className="container-fluid d-flex align-items-center">
            <img src={Photo} alt="pp" className='img-fluid'  />
            <p style={{marginLeft:15, marginTop:10}}>taskinYGT</p>
            </div>
            <div className="container d-flex align-items-center justify-content-between">
              <p style={{marginTop:10}}>126 Like</p>
              <p style={{marginLeft:15, marginTop:10}}>30 Comment</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Feed
