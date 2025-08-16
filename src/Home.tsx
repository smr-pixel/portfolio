import React from 'react';
import './Home.css';
import profile from './assets/profile.jpeg';
import logo from './assets/logo-2-removebg-preview.png';
import bg from './assets/portfolio-background.jpg';

const Home: React.FC = () => {
    return (
        <main className="home" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <section className="hero">
                <a href="/"> <img src={logo} alt="Logo" className="Logo" /></a>
                <h1>Hi, I'm Sarah Reyer, <br />An Aspiring Cybersecurity Professional</h1>
                <p className="intro">
                    Information Science, Computer Science, and Global Policy student at the Unversity of Pittsburgh
                    <br />
                    Founding Vice President of <a href="https://www.linkedin.com/company/wicys-pitt/"> WiCyS (Women in CyberSecurity) @ Pitt </a>
                </p>
                <img src={profile} alt="Profile" className="profile-image" />

            </section>
        </main>
    );
};

export default Home;