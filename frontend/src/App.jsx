import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Proceed from'./Pages/Proceed';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/Navbar';


const App = () => {
  return (

    <main>
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proceed" element={<Proceed />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
