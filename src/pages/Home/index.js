import './styles.css';
import NavBar from "../../components/NavBar";

import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine, RiDownloadCloud2Line} from 'react-icons/ri';

import bgAction from '../../assets/program.svg';
import profile from '../../assets/profile.jpg';

import cv from '../../assets/cv.pdf';

export default function Home() {
    return (
        <main>
            <NavBar />

            {/***HOME***/}

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

                    <div className="bg-home">
                        <img src={bgAction} alt="Homem sentado digitando em um notebook" />
                    </div>
                </div>
            </section>

            {/***ABOUT***/}

            <section className="about">
                <h3>Quem sou<span>?</span></h3>
                <div className="container-about">
                    <div className="photo">
                        <img src={profile} alt="Foto de perfil" />
                    </div>

                    <div className="about-area">
                        <div className="about-info">
                            <p>Sou um desenvolvedor <span className="span">Front-End</span> iniciante e em constante evolução. Apaixonado por tecnologia e busco oportunidade na área a fim de aperfeiçoar meus conhecimentos e adquirir experiência no mercado. Possuo <span className="span">sólidos conhecimentos</span> em HTML, CSS e JavaScript e atualmente estudando React JS. Tenho interesse em desenvolvimento de aplicações web e mobile, bem como, melhores práticas de desenvolvimento.</p>
                        </div>
                        <a href={cv} download="Currículo - João Pedro de Souza Barroso" className="btn-download">
                            <RiDownloadCloud2Line size={23} color="#FFF" />
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}