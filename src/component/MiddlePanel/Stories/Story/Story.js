import React from 'react'
import Resim from '../../../../img/ornek.svg'
import './Story.css'

const Story = () => {
    return (
        <div className='container story-bg'>
            <div className="container d-flex flex-column align-content-between h-100">
                <img src={Resim} alt="Story" className='follows-picture img-fluid' width={33}/>
                <h6 id='user-story-name' className='text-white text-center' style={{marginTop:170}}>Yiğit</h6>
            </div>
        </div>
    )
}

export default Story
