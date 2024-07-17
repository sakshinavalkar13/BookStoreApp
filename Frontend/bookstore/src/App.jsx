import React from 'react';
import {Navigate, Route,Routes } from "react-router-dom"
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";
import Contact from './components/Contact'; 
import About from './components/About';



const App = () => {  // Corrected the function declaration
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/Course" element={authUser?<Courses />:<Navigate to="/Signup"/>} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        

      </Routes>
      <Toaster />

    </div>
    </>
  );
}

export default App;