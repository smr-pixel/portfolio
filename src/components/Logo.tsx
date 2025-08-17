import './Logo.css';
import logo from '../assets/logo-2-removebg-preview.png';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="Logo" className="Logo" />
  </Link>
);

export default Logo;