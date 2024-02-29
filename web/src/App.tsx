import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Layout from './components/Layout.tsx';
import ContactPage from './pages/Contact.tsx';
import AboutPage from './pages/About.tsx';
import ServicesPage from './pages/Services.tsx';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
