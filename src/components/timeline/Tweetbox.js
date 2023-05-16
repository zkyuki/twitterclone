import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import './Tweetbox.css'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase'


function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する処理
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "zkYuki",
      username: "infocollecter",
      verified: "true",
      text: tweetMessage,
      avatar: "https://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar />
                <input value={tweetMessage} placeholder='What are you doing...' type='text' onChange={(e) => setTweetMessage(e.target.value)}></input>
            </div>
            <input value={tweetImage} className='tweetbox_imageinput' placeholder='Enter an image URL' type='text' onChange={(e) => setTweetImage(e.target.value)}></input>
            <Button className='tweetbox_tweetbutton' type='submit' onClick={sendTweet}>Tweet</Button>
        </form>

    </div>
  )
}

export default Tweetbox