import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Certifications from './Certifications';

function App() {
  return (
    <Router>
      <Home />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
