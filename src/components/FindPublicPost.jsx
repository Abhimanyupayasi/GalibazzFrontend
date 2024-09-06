import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CardOfPost from './CardOfPost';
import { useSelector } from 'react-redux';
import BlogPostFetch from './BlogPostFetch';

 // Ensure this path is correct

const FindPublicPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const serverURL =  import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${serverURL}/api/p/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Post not found or an error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center"><span className="loading loading-infinity loading-lg"></span></div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!post) {
    return <div className="text-gray-400">Post not found</div>;
  }

  return (
    <div className="p-4">
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
      <BlogPostFetch/>
    </div>
  );
};

export default FindPublicPost;
