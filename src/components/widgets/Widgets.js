import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>    
            <Search className='widgets_searchIcon'/>
            <input placeholder='Search Twitter' type='text'/>
        </div>

        <div className='widgets_widgetsContainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId='1649307947388788736'/>
            <TwitterTimelineEmbed sourceType='profile' screenName='infocollecter' options={{height: 400}}/>
            <TwitterShareButton url={'https://twitter.com/infocollecter'} options={{text: 'This is a test', via: 'infocollecter'}}/>
        </div>
    </div>
  )
}

export default Widgets