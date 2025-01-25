import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

import MethiPage from './pages/Methi';
import AloveraPage from './pages/Alovera';
import MultaniPage from './pages/MultaniPage';
import NeemPage from './pages/NeemPage';
import PumpKinPage from './pages/PumpkinPage';
import ChiaPage from './pages/ChiaPage';
import GondPage from './pages/GondPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/Methi-page" element={<MethiPage/>} />
            <Route path="/products/Alovera-page" element={<AloveraPage/>} />
            <Route path="/products/Multani-page" element={<MultaniPage/>} />
            <Route path="/products/Neem-page" element={<NeemPage/>} />
            <Route path="/products/Pumpkin-page" element={<PumpKinPage/>} />
            <Route path="/products/Chia-page" element={<ChiaPage/>} />
            <Route path="/products/Gond-page" element={<GondPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;