import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">About Us</h1>
        <p className="text-lg text-black mb-8 text-center">
          Welcome to The Reading Rainbow, where every page turns into a new adventure. We are passionate about connecting readers with the books they love.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Our Mission</h2>
          <p className="text-black mb-4">
            At The Reading Rainbow, our mission is to foster a love for reading by providing a diverse selection of books and a welcoming community for all book enthusiasts.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Our Story</h2>
          <p className="text-black mb-4">
            Founded by a group of avid readers, The Reading Rainbow started as a small neighborhood bookstore and has grown into a beloved community hub. We believe in the magic of books and the joy they bring to our lives.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Meet the Team</h2>
          <p className="text-black">
            Our team is made up of book lovers and experts who are always ready to help you find your next great read. We're here to make your bookstore experience as delightful as possible.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
