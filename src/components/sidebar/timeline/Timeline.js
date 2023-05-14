import React from 'react'
import Post from './Post'
import './Timeline.css'
import Tweetbox from './Tweetbox'

function Timeline() {
  return (
    <div className='timeline'>
        
        <div className='timeline_header'>
            <h2>Home</h2>
        </div>
        <Tweetbox/>
        <Post/>
    </div>
  )
}

export default Timeline