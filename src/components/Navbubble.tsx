import './Navbubble.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Navbubble: React.FC = () => {
  return (
    <h2>
        <ul className="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
        </ul>
    </h2>
  );
};

export default Navbubble;
