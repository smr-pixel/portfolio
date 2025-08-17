import Navbubble from './components/Navbubble';
import Logo from './components/Logo';

const Certifications: React.FC = () => {
    return (
        <main className="certifications" style={{ background: 'black', minHeight: '100vh', color: 'white' }}>
            <section className="hero">
                <Navbubble />
                <Logo />
            </section>
        </main>
    );
};

export default Certifications;