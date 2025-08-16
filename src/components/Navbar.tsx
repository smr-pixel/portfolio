import React from 'react';
import './Navbar.css';
import githubLogo from '../assets/github-logo.jpg';
import linkedin from '../assets/Linkedin-logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>724-954-0422</li>
        <li>sreyer344@gmail.com</li>
        <li>
          <a href="https://github.com/smr-pixel" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="Github" style={{ width: '40px', height: 'auto' }} />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/sarah-r-b85844253" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" style={{ width: '60px', height: 'auto' }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
