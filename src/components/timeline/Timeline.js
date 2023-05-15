import React, { useEffect, useState } from 'react'
import Post from './Post'
import './Timeline.css'
import Tweetbox from './Tweetbox'
import db from "../../firebase"
import {collection, getDocs} from 'firebase/firestore'

function Timeline() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const postData = collection(db, 'posts');
    getDocs(postData).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    });  
  }, [])

  return (
    <div className='timeline'>
        
        <div className='timeline_header'>
            <h2>Home</h2>
        </div>
        <Tweetbox/>

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

    </div>
  )
}

export default Timeline