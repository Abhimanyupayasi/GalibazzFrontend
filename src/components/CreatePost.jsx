// // src/components/CreatePost.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [type, setType] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/post/create', { title, content, type, userEmail });
//       setMessage('Post created successfully');
//       setTitle('');
//       setContent('');
//       setType('');
//       setUserEmail(''); // Resetting for example purposes, adjust as needed
//     } catch (error) {
//       setMessage('Error creating post');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label htmlFor="type">Type:</label>
//           <input
//             type="text"
//             id="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="userEmail">User Email:</label>
//           <input
//             type="email"
//             id="userEmail"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Create Post</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default CreatePost;
// src/components/CreatePost.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [type, setType] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const post = { title, content, type, userEmail, userName };
//       await axios.post('http://localhost:3000/api/post/create', post);
//       setSuccess('Post created successfully');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="type">Type:</label>
//           <input
//             type="text"
//             id="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="userEmail">User Email:</label>
//           <input
//             type="email"
//             id="userEmail"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="userName">User Name:</label>
//           <input
//             type="text"
//             id="userName"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Creating...' : 'Create Post'}
//         </button>
//       </form>
//       {error && <p>Error: {error}</p>}
//       {success && <p>{success}</p>}
//     </div>
//   );
// };

// export default CreatePost;
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [type, setType] = useState('shayri');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const user = useSelector((state) => state.auth.user);
//   const userName = user.name;
//   const userEmail = user.email;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const post = { title, content, type, userEmail, userName };
//       await axios.post('http://localhost:3000/api/post/create', post);
//       toast.success('Post created successfully');
//     } catch (err) {
//       setError(err.message);
//       toast.error('Error creating post');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold text-white mb-6">Create Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-400 mb-2">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 bg-gray-700 text-white rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-gray-400 mb-2">Content:</label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-2 bg-gray-700 text-white rounded h-32"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="type" className="block text-gray-400 mb-2">Type:</label>
//           <select
//             id="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full p-2 bg-gray-700 text-white rounded"
//           >
//             <option value="shayri">Shayri</option>
//             <option value="song">Song</option>
//             <option value="story">Story</option>
//             <option value="jokes">Jokes</option>
//             <option value="thoughts">Thoughts</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded mt-4"
//           disabled={loading}
//         >
//           {loading ? (
//             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//           ) : (
//             'Create Post'
//           )}
//         </button>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('shayri');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  //console.log(user);
  //console.log(token);


  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const serverURL =  import.meta.env.VITE_API_URL;
     
     

    try {
      const post = { title, content, type, userEmail: user.email, userName: user.name };
      await axios.post(`${serverURL}/api/post/create`, post, {
        headers: { Authorization: `${token}` },
      });
      toast.success('Post created successfully');
      setTitle('');
      setContent('');
      setType('shayri');
    } catch (err) {
      setError(err.message);
      toast.error('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white mb-6">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-400 mb-2">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-400 mb-2">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded h-32"
            placeholder="Type your content and press Enter for a new line..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-400 mb-2">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
          >
            <option value="shayri">Shayri</option>
            <option value="song">Song</option>
            <option value="story">Story</option>
            <option value="jokes">Jokes</option>
            <option value="thoughts">Thoughts</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;


