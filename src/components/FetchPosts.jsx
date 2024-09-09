import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice'; // Import logout action
import CardOfPost from './CardOfPost'; 
import IntroButton from './Galiya/IntroButton';
import RedirectSongs from './Songs/RedirectSongs';
import { useNavigate } from 'react-router-dom';

const FetchPosts = () => {
  const serverURL = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const observer = useRef();

  const lastPostElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Fetch Posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${serverURL}/api/post/all`, {
          params: { page, limit: 20 },
          headers: {
            Authorization: `${token}`,
          },
        });

        setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
        setHasMore(response.data.posts.length > 0);
      } catch (err) {
        setError(err.message);
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, token, dispatch, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white mb-6">All Posts</h1>
      <div className="w-full lg:flex justify-between items-center">
        <IntroButton />
        <RedirectSongs />
      </div>
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
                  contentStyle={{ whiteSpace: 'pre-wrap' }}
                />
              </div>
            ) : (
              <CardOfPost
                id={post._id}
                email={post.userEmail}
                key={post._id}
                heading={post.title}
                content={post.content}
                username={post.userName}
                createdAt={post.createdAt}
                type={post.type}
                contentStyle={{ whiteSpace: 'pre-wrap' }}
              />
            )
          ))}
        </div>
      )}
      {loading && (
        <div className="text-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default FetchPosts;
