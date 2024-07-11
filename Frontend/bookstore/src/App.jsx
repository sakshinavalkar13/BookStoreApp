import React from 'react';
import { Route,Routes } from "react-router-dom"
import Home from "./home/Home";
import Courses from "./courses/Courses";


const App = () => {  // Corrected the function declaration
  return (
    <>
      {/*<Home />

      <Course />*/}
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/Course" element={<Courses />} />

      </Routes>
    </>
  );
}

export default App;