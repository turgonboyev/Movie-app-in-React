import React from "react"
import './App.css';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

export default function App() {
  return(
      <div>
          <Navbar />
          <Main/>
          <Footer/>
      </div>
  )
}

