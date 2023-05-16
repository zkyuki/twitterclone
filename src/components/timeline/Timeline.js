import React, { useEffect, useState } from 'react'
import Post from './Post'
import './Timeline.css'
import Tweetbox from './Tweetbox'
import db from "../../firebase"
import {collection, getDocs, query, orderBy, onSnapshot} from 'firebase/firestore'
import FlipMove from 'react-flip-move'

function Timeline() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy('timestamp', 'desc'))
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()))
    // });  

    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='timeline'>
        
        <div className='timeline_header'>
            <h2>Home</h2>
        </div>
        <Tweetbox/>
        <FlipMove>
          {posts.map((post) => (
            <Post 
              // uuidを使うべき
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>

    </div>
  )
}

export default Timeline