import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpeg';

const Home: React.FC = () => {
    return (
        <main className="home">
            <section className="hero">
                <img src="/logo-2-removebg-preview.png" alt="Logo" className="Logo" />
                <h1>Hi, I'm Sarah Reyer, <br />An Aspiring Cybersecurity Professional</h1>
                <p className="intro">
                    Information Science, Computer Science, and Global Policy student at the Unversity of Pittsburgh
                    <br />
                    Founding Vice President of <a href="https://www.linkedin.com/company/wicys-pitt/"> WiCyS (Women in CyberSecurity) at Pitt </a>
                </p>
                <img src={profile} alt="Profile" className="profile-image" />

            </section>
        </main>
    );
};

export default Home;