import React from 'react'
import Input from './Input'
import axios from 'axios';
import { useState, useEffect } from 'react';
const serverURL = import.meta.env.VITE_API_URL;
import CommentBox from './CommentBox';



function FetchComment({postId}) {
    const [comments, setComments] = useState([]);
   postId = postId;
   const serverURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`${serverURL}/posts/${postId}/comments`);
                setComments(response.data);
            } catch (err) {
               // console.error(err);
            }
        }

        fetchComments();
    }, [postId]);

   // console.log(comments);
    
    
  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <Input POST_ID={postId} />

        <div className='h-10'>

        </div>

        {comments.map((comment) => (
            <CommentBox
                key={comment._id}
                text={comment.text}
                userName={comment.userName}
                postId={comment.postId}
                userEmail={comment.userEmail}
                id={comment._id}
                createdAt={comment.createdAt}
            />
        ))}
        


        

    </div>
  )
}

export default FetchComment