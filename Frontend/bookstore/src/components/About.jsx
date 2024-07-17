// About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleCloseAbout = () => {
    // Navigate back to the Home page when the cross (X) is clicked
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-800 p-4">
        <div className="bg-gray-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-3xl font-bold">Discover Our Story</h1>
        </div>
          <button
            className="text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
            onClick={handleCloseAbout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Welcome to BookStore, where each book opens a new chapter in your life. We're more than just a bookstore — we're your literary companion on the journey of imagination and discovery.
          </p>
          <p className="mb-4 text-pink-500 dark:text-pink-400 font-bold">
            Dive into our curated collection, where every page turns into an adventure. Uncover stories that inspire, educate, and transport you to different worlds.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Join our community of book lovers and explore the power of words to ignite your passion for reading. Let's embark on this enriching journey together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
