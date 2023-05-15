import { Avatar } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import './Tweetbox.css'


function Tweetbox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar />
                <input placeholder='いまどうしている' type='text'></input>
            </div>
            <input className='tweetbox_imageinput' placeholder='画像のURLを入力' type='text'></input>
            <Button className='tweetbox_tweetbutton' type='submit'>ツイートする</Button>
        </form>

    </div>
  )
}

export default Tweetbox