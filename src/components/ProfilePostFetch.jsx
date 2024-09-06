import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import CardOfPost from './CardOfPost';  // Import your Card component
import { useSelector } from 'react-redux';

const ProfilePostFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // Set initial loading to false
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const token = useSelector((state) => state.auth.token); // Get token from state if needed

  const user = useSelector((state) => state.auth.user);
  const email = user.email;

  const observer = useRef();
  
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return; // Skip if already loading
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const serverURL =  import.meta.env.VITE_API_URL;
        const response = await axios.get(`${serverURL}/postEmail/${email}`,
            {
                headers: { Authorization: `${token}` },
              }
        );
        // const response = await axios.get(`http://localhost:3000/postEmail/cto.dhd@gmail.com`);
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

    



        

  if (error) return <p>Error fetching posts: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white mb-6">  Posts</h1>
      {posts.length === 0 && !loading ? (
        <p className="text-gray-400">No posts available</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            posts.length === index + 1 ? (
              <div ref={lastPostElementRef} key={post._id}>
                <CardOfPost
                  id={post._id}
                  email={post.userEmail}
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
                key={post._id}
                id={post._id}
                email={post.userEmail}
                heading={post.title }
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

export default ProfilePostFetch;
