import React from "react";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  const [authUser, setAuthUser] = useAuth(); // Get authUser and setAuthUser from AuthProvider
  console.log(authUser);

  return (
    <>
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
