import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
import State from './pages/state/State';
import './index.css'

const App = () => (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/estado" element={<State />} />
            <Route path="/portafolio" element={<Portfolio />} />
        </Routes>
    </div>
);

export default App;