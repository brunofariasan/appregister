
import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Success from './pages/Success/success';
import Home from './pages/Register/home';

const App = () => {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="success" element={<Success />}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;