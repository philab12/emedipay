// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {QueryClientProvider, QueryClient} from "react-query";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Work from './pages/Work';
import Home from './pages/Home';
import Layout from './components/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    
    <AnimatePresence mode='wait'>
      <QueryClientProvider client={queryClient}>
     <Routes location={location} key={location.pathname}>
        <Route  path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/work" element={<Work />} />
       </Route>
     </Routes>
     </QueryClientProvider>
     </AnimatePresence> 
  );
}

export default App;
