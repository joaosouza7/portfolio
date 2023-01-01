import './styles.css';
import NavBar from "../../components/NavBar";

import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine } from 'react-icons/ri';

import bgAction from '../../assets/program.svg';

export default function Home() {
    return (
        <main>
            <NavBar />
            
            <section className="home">
                <div className="container-home">
                    <div className="info-area">
                        <div className="info">
                            <h3>Olá, eu sou</h3>
                            <h1>João Souza</h1>
                            <span>Desenvolvedor Front-End</span>
                            <p>Programador iniciante buscando oportunidade no mercado de trabalho, entre em contato e vamos conversar!</p>
                        </div>

                        <div className="socials">
                            <a target="_blank" rel="noreferrer" className="github" href="https://github.com/joaosouza7">
                                <RiGithubFill size={30} color="#FFF" />
                            </a>
                            <a target="_blank" rel="noreferrer" className="linkedin" href="https://www.linkedin.com/in/joaosouzadesenvolvedorweb/">
                                <RiLinkedinBoxFill size={30} color="#FFF" />
                            </a>
                            <a target="_blank" rel="noreferrer" className="instagram" href="https://www.instagram.com/joaossouza07/">
                                <RiInstagramLine size={30} color="#FFF" />
                            </a>
                        </div>
                    </div>

                    <div className="photo">
                        <img src={bgAction} alt="Homem sentado digitando em um notebook" />
                    </div>
                </div>
            </section>
        </main>
    )
}