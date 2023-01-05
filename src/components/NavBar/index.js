import './styles.css';

import { RiCodeSSlashLine, RiMenuLine, RiCloseFill } from 'react-icons/ri';

export default function NavBar() {
    
    // Abrir menu
    function openNav() {
        document.getElementById("myNav").style.width = '100%';
    }

    // Fechar menu
    function closeNav() {
        document.getElementById("myNav").style.width = '0';
    }

    return (
        <nav>

            <div id="myNav" className="overlay">
                <button className="btn-close" onClick={() => closeNav()}>
                    <RiCloseFill size={30} color="#c22525" />
                </button>

                <div className="overlay-content">
                    <ul onClick={() => closeNav()}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Quem sou?</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className="logo">
                    <h3>
                    Joao Souz
                    <RiCodeSSlashLine size={30} color="#facc15" />
                    </h3>
                </div>

                <div className="menu">
                    <div className="menu-mobile">
                        <button onClick={() => openNav()}>
                            <RiMenuLine size={30} color="#FFF" />
                        </button>
                    </div>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Quem sou?</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}