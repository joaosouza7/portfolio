import './styles.css';

import { RiCodeSSlashLine } from 'react-icons/ri';

export default function NavBar() {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <h3>
                    Joao Souz
                    <RiCodeSSlashLine size={30} color="#facc15" />
                    </h3>
                </div>

                <div className="menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Quem sou?</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projetos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}