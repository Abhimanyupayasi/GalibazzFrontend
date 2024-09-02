import React from 'react'
import CreatePost from '../components/CreatePost'
import FetchPosts from '../components/FetchPosts'

function CreatePostPage() {
  return (
    <div>
        <CreatePost/>
        <FetchPosts/>
    </div>
  )
}

export default CreatePostPage