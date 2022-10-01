import React from 'react'
import './Stories.css'
import Story from './Story/Story'

const Stories = () => {
  return (
    <div id='stories' className='container d-flex flex-row justfy-content-around mt-3'>
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  )
}

export default Stories
