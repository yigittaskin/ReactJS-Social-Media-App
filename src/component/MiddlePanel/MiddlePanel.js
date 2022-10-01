import React from 'react'
import Stories from './Stories/Stories'
import Feeds from './Feeds/Feeds';
import './MiddlePanel.css'

const MiddlePanel = () => {
  return (
    <div id='middle-panel' className='container-fluid col-md-6 ml-0'>
      <Stories />
      <div className="grey-line-xl text-center"></div>
      <Feeds />
    </div>
  )
}

export default MiddlePanel
