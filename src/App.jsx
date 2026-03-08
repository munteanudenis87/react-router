import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './components/Homepage';
import About from './components/About';
import Products from './components/Products';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/about" element={<About />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
