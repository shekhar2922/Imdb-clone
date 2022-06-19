import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Wishlist from './components/Wishlist';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<>
        <Banner />
        <Movies />
      </>}/>
      <Route path="/wishlist" element={<Wishlist />}/>
    </Routes>   
    </Router>
  );
}

export default App;
