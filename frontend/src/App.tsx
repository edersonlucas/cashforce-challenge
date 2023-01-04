import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AsideMenu from './components/AsideMenu';
import Header from './components/Header';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import Login from './pages/Login';

function App() {
  return (
  <div className="flex flex-col min-h-screen max-w-screen bg-white-900 text-white-900 mx-auto">
  <Header/>
    <AsideMenu />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/invoices" element={ <Invoice/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="*" element={ <Home/> } />
    </Routes>
  </div>
  );
}

export default App;
