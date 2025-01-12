import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showMessage, setShowMessage] = useState(false);  // To control message visibility
  const navigate = useNavigate();  // Initialize navigate

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission
    setStatus('Message sent successfully!');
    setShowMessage(true);  // Show the success message immediately
  };

  // Handle closing of the success message and navigating back to homepage
  const handleCloseMessage = () => {
    setShowMessage(false);  // Hide success message
    navigate('/');  // Navigate back to homepage
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Contact Us</h1>
        <p className="text-lg text-black mb-8 text-center">
          We'd love to hear from you! Please fill out the form below or reach us at the contact details provided.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Contact Information</h2>
          <p className="mb-2 text-black"><span className="font-semibold text-pink-500">Email:</span> contact@readingrainbow.com</p>
          <p className="mb-2 text-black"><span className="font-semibold text-pink-500">Phone:</span> +1-234-567-890</p>
          <p className="mb-2 text-black"><span className="font-semibold text-pink-500">Address:</span> 123 Book Street, Reading City, Bookland</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-500 font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-500 font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-pink-500 font-semibold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Success message with cross button in the upper-right corner */}
        {showMessage && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative text-center">
              <p className="text-lg text-green-500 font-semibold mb-4">{status}</p>
              
              {/* Close button in the upper-right corner */}
              <button
                onClick={handleCloseMessage}
                className="absolute top-2 right-2 text-red-500 font-semibold hover:text-red-700"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
