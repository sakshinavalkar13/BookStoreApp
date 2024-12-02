import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
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
        
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-500 font-semibold mb-2">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-500 font-semibold mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-pink-500 font-semibold mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message" required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
