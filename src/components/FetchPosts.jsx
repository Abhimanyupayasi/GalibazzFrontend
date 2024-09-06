// // src/components/FetchPosts.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FetchPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/post/all');
//         setPosts(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p>Error fetching posts: {error}</p>;

//   return (
//     <div>
//       <h1>All Posts</h1>
//       {posts.length === 0 ? (
//         <p>No posts available</p>
//       ) : (
//         <ul>
//           {posts.map(post => (
//             <li key={post._id}>
//               <h2>{post.title}</h2>
//               <p>{post.content}</p>
//               <p>Type: {post.type}</p>
//               <p>User Email: {post.userEmail}</p>
//               <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchPosts;


// src/components/FetchPosts.jsx
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';

// const FetchPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(false);

//   const observer = useRef();
//   const lastPostElementRef = useCallback(node => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     axios.get('http://localhost:3000/api/post/all', { params: { page, limit: 20 } })
//       .then(response => {
//         setPosts(prevPosts => {
//           return [...prevPosts, ...response.data.posts];
//         });
//         setHasMore(response.data.posts.length > 0);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [page]);

//   if (error) return <p>Error fetching posts: {error}</p>;

//   return (
//     <div>
//       <h1>All Posts</h1>
//       {posts.length === 0 ? (
//         <p>No posts available</p>
//       ) : (
//         <ul>
//           {posts.map((post, index) => {
//             if (posts.length === index + 1) {
//               return (
//                 <li ref={lastPostElementRef} key={post._id}>
//                   <h2>{post.title}</h2>
//                   <p>{post.content}</p>
//                   <p>Type: {post.type}</p>
//                   <p>User Email: {post.userEmail}</p>
//                   <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//                 </li>
//               );
//             } else {
//               return (
//                 <li key={post._id}>
//                   <h2>{post.title}</h2>
//                   <p>{post.content}</p>
//                   <p>Type: {post.type}</p>
//                   <p>User Email: {post.userEmail}</p>
//                   <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//                 </li>
//               );
//             }
//           })}
//         </ul>
//       )}
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default FetchPosts;

// src/components/FetchPosts.jsx
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';

// const FetchPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(false);

//   const observer = useRef();
//   const lastPostElementRef = useCallback(node => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     axios.get('http://localhost:3000/api/post/all', { params: { page, limit: 20 } })
//       .then(response => {
//         setPosts(prevPosts => {
//           return [...prevPosts, ...response.data.posts];
//         });
//         setHasMore(response.data.posts.length > 0);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [page]);

//   if (error) return <p>Error fetching posts: {error}</p>;

//   return (
//     <div>
//       <h1>All Posts</h1>
//       {posts.length === 0 ? (
//         <p>No posts available</p>
//       ) : (
//         <ul>
//           {posts.map((post, index) => {
//             if (posts.length === index + 1) {
//               return (
//                 <li ref={lastPostElementRef} key={post._id}>
//                   <h2>{post.title}</h2>
//                   <p>{post.content}</p>
//                   <p>Type: {post.type}</p>
//                   <p>User: {post.userName}</p>
//                   <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//                 </li>
//               );
//             } else {
//               return (
//                 <li key={post._id}>
//                   <h2>{post.title}</h2>
//                   <p>{post.content}</p>
//                   <p>Type: {post.type}</p>
//                   <p>User: {post.userName}</p>
//                   <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
//                 </li>
//               );
//             }
//           })}
//         </ul>
//       )}
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default FetchPosts;

// src/components/FetchPosts.jsx
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';
// import CardOfPost from './CardOfPost';


// const FetchPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(false);

//   const observer = useRef();
//   const lastPostElementRef = useCallback(node => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     axios.get('http://localhost:3000/api/post/all', { params: { page, limit: 20 } })
//       .then(response => {
//         console.log(response.data.posts);
//         setPosts(prevPosts => {
//           return [...prevPosts, ...response.data.posts];
//         });
//         setHasMore(response.data.posts.length > 0);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [page]);

//   if (error) return <p>Error fetching posts: {error}</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-white mb-6">All Posts</h1>
//       {posts.length === 0 ? (
//         <p className="text-gray-400">No posts available</p>
//       ) : (
//         <div className="space-y-4">
//           {posts.map((post, index) => {
//             if (posts.length === index + 1) {
//               return (
//                 <div ref={lastPostElementRef} key={post._id}>
//                   <CardOfPost
//                     heading={post.title}
//                     content={post.content}
//                     username={post.userName}
//                     createdAt={post.createdAt}
//                     type={post.type}
//                   />
//                 </div>
//               );
//             } else {
//               return (
//                 <CardOfPost
//                   key={post._id}
//                   heading={post.title}
//                   content={post.content}
//                   username={post.userName}
//                   createdAt={post.createdAt}
//                   type={post.type}
//                 />
//               );
//             }
//           })}
//         </div>
//       )}
//       {loading && <p className="text-gray-400">Loading...</p>}
//     </div>
//   );
// };

// export default FetchPosts;



import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import CardOfPost from './CardOfPost'; // Ensure you have this component to display individual posts
import { useSelector } from 'react-redux';
import IntroButton from './Galiya/IntroButton';



const FetchPosts = () => {

  const serverURL =  import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const token = useSelector((state) => state.auth.token);
  
  const observer = useRef();

  const lastPostElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

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

        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
        setHasMore(response.data.posts.length > 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, token]);

  //console.log(posts);
  

  if (error) return <p>Error fetching posts: {error}</p>;
  
  return (
    <div className="p-4">
      
        
      
      <h1 className="text-3xl font-bold text-white mb-6">All Posts</h1>
      <IntroButton/>
      {posts.length === 0 && !loading ? (
        <p className="text-gray-400">No posts available</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            posts.length === index + 1 ? (
              <div ref={lastPostElementRef} key={post._id}>
                <CardOfPost
                  id = {post._id}
                  email = {post.userEmail}
                  heading={post.title}
                  content={post.content}
                  username={post.userName}
                  createdAt={post.createdAt}
                  type={post.type}
                  contentStyle={{ whiteSpace: 'pre-wrap' }}  // This will preserve line breaks
                />
              </div>
            ) : (
              <CardOfPost
                id = {post._id}
                email = {post.userEmail}
                key={post._id}
                heading={post.title}
                content={post.content}
                username={post.userName}
                createdAt={post.createdAt}
                type={post.type}
                contentStyle={{ whiteSpace: 'pre-wrap' }}  // This will preserve line breaks
              />
            )
          ))}
        </div>
      )}
      {loading && <div className="text-center"><span className="loading loading-infinity loading-lg"></span></div>}
    </div>
  );
};

export default FetchPosts;

