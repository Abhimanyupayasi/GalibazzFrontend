import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import CardOfPost from './CardOfPost'; // Assuming CardOfPost is your custom component
import LoginButton from './Buttons/LoginButton';
import { useSelector } from 'react-redux';
import IntroButton from './Galiya/IntroButton';

const BlogPostFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const observer = useRef();
  const token = useSelector((state) => state.auth.token);
  const lastPostElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Fetch more posts if required
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  console.log(posts);

  posts.map((post) => {
    console.log(post.userEmail);
  });
  
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const serverURL =  import.meta.env.VITE_API_URL;
      //  const response = await axios.get('http://localhost:3000/api/newpost');
        const response = await axios.get(`${serverURL}/api/newpost`);
      //  console.log(response.data);

      console.log(response.data);
        
        setPosts(response.data); // Assuming response.data is the array of posts
        setLoading(false);
      } catch (error) {
        //console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    
    <div className="p-4">
      
        <div className='w-full mb-2 flex justify-center items-center'>
          {token ? <h2 className="text-2xl font-bold text-white mb-2">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome! </span>You're  <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Logged In!</span> </h1>


          </h2> : <h2 className="text-2xl font-bold text-white mb-2">
            <h1 className="lg:text-3xl text-xl font-bold text-white mb-6">Feast Your Eyes on These Posts! But, Psst... 
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Log in </span>to Unlock the  <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Full Buffet!</span> </h1>
            </h1>
            <div className='w-full justify-center flex items-center'>
            <LoginButton/>
            </div>
            {/* <div className='w-full textarea-md mt-5 justify-center flex items-center'>
              <IntroButton/>
            </div> */}
            
            </h2>}
          {/* <LoginButton/> */}
        </div>
      {posts.length === 0 && !loading ? (
        <p className="text-gray-400">No posts available</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            posts.length === index + 1 ? (
              // <div ref={lastPostElementRef} key={post._id}>
              //   <CardOfPost
              //     id={post._id}
              //     email={post.userEmail}
              //     heading={post.title}
              //     content={post.content}
              //     username={post.userName}
              //     createdAt={post.createdAt}
              //     type={post.type}
              //     contentStyle={{ whiteSpace: 'pre-wrap' }}  // Preserves line breaks
              //   />
              // </div>
              <div ref={lastPostElementRef} key={post._id}>
  <CardOfPost 
    id={post._id}
    email= {post.userEmail}  // Add a fallback here
    heading={post.title}
    content={post.content}
    username={post.userName}
    createdAt={post.createdAt}
    type={post.type}
    contentStyle={{ whiteSpace: 'pre-wrap' }}  // Preserves line breaks
  />
</div>

            ) : (
              <CardOfPost
                id={post._id}
                email= {post.userEmail}  // Add a fallback here
                key={post._id}
                heading={post.title}
                content={post.content}
                username={post.userName}
                createdAt={post.createdAt}
                type={post.type}
                contentStyle={{ whiteSpace: 'pre-wrap' }}  // Preserves line breaks
              />
            )
          ))}
        </div>
      )}
      {loading && <div className="text-center"><span className="loading loading-infinity loading-lg"></span></div>}
    </div>
  );
};

export default BlogPostFetch;
