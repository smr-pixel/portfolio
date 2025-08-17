import Navbubble from './components/Navbubble';
import Logo from './components/Logo';

const Projects: React.FC = () => {
    return (
        <main className="projects" style={{ background: 'black', minHeight: '100vh', color: 'white' }}>
            <section className="hero">
                <Navbubble />
                <Logo />
            </section>
        </main>
    );
};

export default Projects;