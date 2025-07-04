import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router';
import Home, {About, Contact} from './components/Home';

import './App.css'

function App1() {
  

  return (
    <>
       <BrowserRouter>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
      Route Definitions
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       </BrowserRouter>

    </>
  )
}

export default App1
