import './Logo.css';
import React from 'react';
import logo from '../assets/logo-2-removebg-preview.png';

const Logo: React.FC = () => {
  return (
    <a href="/portfolio"> <img src={logo} alt="Logo" className="Logo" /></a>
  );
};

export default Logo;