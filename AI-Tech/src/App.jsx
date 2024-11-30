import React, { useEffect, useRef } from 'react';
import * as Fluid from 'webgl-fluid';
import { NavBar } from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMain from './components/compoMain/AboutMain';
import Mockups from './components/Projects';
import Letstalk from './components/Letstalk';
import Products from './components/Product';
import ServiceMain from './components/compoMain/ServiceMain';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';


const FluidCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const config = {
      SIM_RESOLUTION: 256,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 5,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.9,
      PRESSURE_ITERATIONS: 20,
      SPLAT_RADIUS: 0.60,
      SPLAT_FORCE: 6000,
      curl: 10,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      TRIGGER: 'hover',
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      BLOOM: false,
      IMMEDIATE: false,
      TRANSPARENT: true,
      backgroundColor: [0, 0, 0, 0],
      SUNRAYS: false,
    };

    const fluidSimulation = Fluid.default(canvas, config);

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / canvas.width;
      const y = 1 - (event.clientY - rect.top) / canvas.height;

      fluidSimulation.splat(x, y, Math.random() * 10, Math.random() * 10, Math.random() * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },
   []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
};

const App = () => {
  const handleMouseEnter = (event) => {
    event.stopPropagation();
  };


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top:"0",
        pointerEvents: 'auto', 
      }}
      onMouseEnter={handleMouseEnter}
    >
    <Router>
      <FluidCursor/>
      <ScrollToTop />
        <NavBar />
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<AboutMain />} />
            <Route path="/projects" element={<Mockups />} />
            <Route path="/products" element={<Products />} />
            <Route path="/serviceMain" element={<ServiceMain />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Letstalk />
    </Router>
    </div>
  );
};



export default App;