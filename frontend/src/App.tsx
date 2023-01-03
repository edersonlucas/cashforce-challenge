import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Invoice from './pages/Invoice';

function App() {
  return (
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/invoices" element={ <Invoice/> } />
    <Route path="*" element={ <Home/> } />
  </Routes>
  );
}

export default App;
