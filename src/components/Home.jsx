import React from "react";
import Navbar from "../components/Navbar";
import Banner from "./Banner"; // Adjusted path if in the same directory
import Footer from "./Footer";
import Freebook from "./Freebook";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
