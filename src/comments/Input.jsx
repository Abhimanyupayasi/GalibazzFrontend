import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const serverURL = import.meta.env.VITE_API_URL;
import { IoMdSend } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { useSelector } from 'react-redux';






function Input({POST_ID}) {
   // console.log(POST_ID);
    
   
    const [text, setText] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('    ');
    const [postId, setPostId] = useState(POST_ID);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (user) {
            setUserName(user.name);
            setUserEmail(user.email);
        }
    }, [user]);

    


    


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${serverURL}/posts/${postId}/comments`, {
                text,
                userName,
                userEmail,
                postId
            });

            setComments([...comments, response.data]);
            setText('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            window.location.reload();
        }
    }

    return (

        user ? ( 
            <div className='w-full flex justify-center items-center flex-col'>
            <form className='lg:w-2/3 w-full flex justify-center items-center' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Add a comment'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='border rounded-tl-md h-11 rounded-bl-md border-gray-400 p-2 w-full lg:w-2/4'
                />
                <button
                    type='submit'
                    className= 'rounded-tr-md text-sm flex justify-center items-center rounded-br-md h-11 gap-2 bg-blue-500  text-white lg:px-2 px-3 py-2'
                >
                    {loading ? 'Adding' : ``} <IoMdSend className='lg:text-2xl text-md' />
                </button>
            </form>
        </div>
        ) :( 
            <h2 className='lg:text-2xl text-lg'>

                Please login to comment here 💬💬
            </h2>
        ) 

        
        
    )


}

export default Input