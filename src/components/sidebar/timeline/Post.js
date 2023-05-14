import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import React from 'react'

function Post() {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar />
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>zkYuki</h3>
                    <span className='post_headerSpecial'>
                        <VerifiedUser className='post_badge'/>
                        @zkYuki
                    </span>
                </div>
                <div className='post_headerDescription'>
                    <p>react now</p>
                </div>
            </div>
            <img src='https://source.unsplash.com/random' alt=''></img>
            <div className='post_footer'>
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorder fontSize='small'/>
                <PublishOutlined fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post