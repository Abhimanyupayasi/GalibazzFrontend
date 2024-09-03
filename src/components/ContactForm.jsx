import React, { useState } from 'react';

const ContactForm = () => {
  const [showShayriOptions, setShowShayriOptions] = useState(false);
  const [showJokesOptions, setShowJokesOptions] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    contentType: '',
    shayriType: '',
    jokesType: '',
    feature: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });

    if (name === 'contentType') {
      setShowShayriOptions(value === 'shayri');
      setShowJokesOptions(value === 'jokes');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic
    // Example: Using Pageclip
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://send.pageclip.co/gAwWf8A1Ueace2pqy1feG89foBufTWwf', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset();
        setFormState({
          name: '',
          email: '',
          contentType: '',
          shayriType: '',
          jokesType: '',
          feature: '',
          message: ''
        });
        setShowShayriOptions(false);
        setShowJokesOptions(false);
      } else {
        alert('Form submission failed.');
      }
    })
    .catch(error => {
    //  console.error('Error:', error);
      alert('Form submission failed.');
    });
  };2

  return (
    <div className="max-w-lg  mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#9333EA]">Contact Us</h1>
      <form action="https://send.pageclip.co/gAwWf8A1Ueace2pqy1feG89foBufTWwf" method='post' className="pageclip-form space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleInputChange}
          required
          className="w-full text-gray-800 px-4 py-3 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 text-gray-800 py-3 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
        />
        <div>
          <label className="block text-gray-700">What do you like most?</label>
          <select
            name="contentType"
            value={formState.contentType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-gray-800 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
          >
            <option value="">Select an option</option>
            <option value="jokes">Jokes</option>
            <option value="shayri">Shayri</option>
            <option value="funny-thoughts">Funny Thoughts</option>
            <option value="funny-story">Funny Story</option>
          </select>
        </div>
        {showShayriOptions && (
          <div className="mt-4">
            <label className="block text-gray-700">Select Shayri Type:</label>
            <select
              name="shayriType"
              value={formState.shayriType}
              onChange={handleInputChange}
              className="w-full text-gray-800 px-4 py-3 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
            >
              <option value="">Select an option</option>
              <option value="dark">Dark Shayri</option>
              <option value="normal">Normal Shayri</option>
              <option value="nonveg">Nonveg Shayri</option>
            </select>
          </div>
        )}
        {showJokesOptions && (
          <div className="mt-4">
            <label className="block text-gray-700">Select Jokes Type:</label>
            <select
              name="jokesType"
              value={formState.jokesType}
              onChange={handleInputChange}
              className="w-full text-gray-800 px-4 py-3 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
            >
              <option value="">Select an option</option>
              <option value="dark">Dark Jokes</option>
              <option value="normal">Normal Jokes</option>
              <option value="nonveg">Nonveg Jokes</option>
            </select>
          </div>
        )}
        <div>
          <label className="block text-gray-700">What features are you interested in?</label>
          <select
            name="feature"
            value={formState.feature}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-[#646EE4] rounded-md focus:outline-none text-gray-800 focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
          >
            <option value="">Select an option</option>
            <option value="group-chat">Group Chat</option>
            <option value="like-comment">Like/Comment Feature</option>
            <option value="live-stream">Live Stream</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formState.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 text-gray-800 border border-[#646EE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] bg-[#F9F9F9]"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="pageclip-form__submit w-full py-3 px-4 bg-[#646EE4] text-white font-semibold rounded-md hover:bg-[#4e54c8] focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
