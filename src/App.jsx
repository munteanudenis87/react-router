import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Products from './pages/Products';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
