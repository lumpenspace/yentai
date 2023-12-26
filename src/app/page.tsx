'use client';
import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Logo from './components/Logo';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  
  return (
    <div className="center">
    <AnimatedBackground />
    <Logo />
    </div>
    );
    
  };
  
  export default Home;
  