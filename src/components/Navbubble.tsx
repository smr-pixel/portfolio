import './Navbubble.css';
import React from 'react';

const Navbubble: React.FC = () => {
  return (
    <h2>
        <ul className="nav-list">
            <li><a href="./About">About</a></li>
            <li><a href="./Projects">Projects</a></li>
            <li><a href="./Certifications">Certifications</a></li>
        </ul>
    </h2>
  );
};

export default Navbubble;
