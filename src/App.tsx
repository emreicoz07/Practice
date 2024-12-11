import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* Footer'ın üzerine çıkmaması için padding ekliyoruz */}
      <main style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={ <About/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
