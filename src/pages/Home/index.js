import './styles.css';
import NavBar from "../../components/NavBar";

import { SiHtml5, SiCss3, SiNodedotjs, SiSass, SiJavascript, SiTypescript, SiReact } from 'react-icons/si';
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine, RiDownloadCloud2Line, RiCopyrightFill, RiCodeBoxFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';

import bgAction from '../../assets/program.svg';
import profile from '../../assets/profile.jpg';
import gow from '../../assets/gow.png';

import cv from '../../assets/cv.pdf';

export default function Home() {
    return (
        <main>
            <NavBar />

            {/***HOME***/}

            <section className="home" id="home">
                <div className="container-home">
                    <div className="info-area">
                        <div className="info">
                            <h3>Olá, eu sou</h3>
                            <h1>João Souza</h1>
                            <span>Desenvolvedor Front-End</span>
                            <p>Programador iniciante buscando oportunidade no mercado de trabalho, entre em contato e vamos conversar!</p>
                        </div>

                        <div className="socials">
                            <a target="_blank" rel="noreferrer" href="https://github.com/joaosouza7">
                                <RiGithubFill size={30} color="#FFF" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joaosouzadesenvolvedorweb/">
                                <RiLinkedinBoxFill size={30} color="#FFF" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/joaossouza07/">
                                <RiInstagramLine size={30} color="#FFF" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:joaoosouza07@gmail.com">
                                <FiMail size={30} color="#FFF" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-home">
                        <img src={bgAction} alt="Homem sentado digitando em um notebook" />
                    </div>
                </div>
            </section>

            {/***ABOUT***/}

            <section className="about" id="about">
                <h3 className="title">Quem sou<span>?</span></h3>
                <div className="container-home">
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

            {/***SKILLS***/}

            <section className="skills" id="skills">
                <h3 className="title">Skills</h3>
                <div className="container-home">
                    <div className="cards">
                        <div className="card">
                            <SiHtml5 size={32} color="#f3d353" />
                            <span>HTML</span>
                            <p>É uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.</p>
                        </div>

                        <div className="card">
                            <SiCss3 size={32} color="#f3d353" />
                            <span>CSS</span>
                            <p>É uma linguagem de folha de estilo composta por “camadas”, usado para estilizar as páginas HTML.</p>
                        </div>

                        <div className="card">
                            <SiJavascript size={32} color="#f3d353" />
                            <span>JavaScript</span>
                            <p>É uma linguagem de programação que permite implementar elementos dinâmicos em páginas web.</p>
                        </div>

                        <div className="card">
                            <SiSass size={32} color="#f3d353" />
                            <span>Sass</span>
                            <p>É um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa no CSS.</p>
                        </div>

                        <div className="card">
                            <SiReact size={32} color="#f3d353" />
                            <span>React.js</span>
                            <p>É uma biblioteca JavaScript com foco em criar interfaces de usuário de forma "componetizada".</p>
                        </div>

                        <div className="card">
                            <RiGithubFill size={32} color="#f3d353" />
                            <span>Github</span>
                            <p>É uma plataforma para hospedagem e controle de versão de código utilizando o sistema Git como base</p>
                        </div>

                        <div className="card">
                            <SiTypescript size={32} color="#f3d353" />
                            <span>Typescript</span>
                            <p>É um superset do JavaScript que incluir recursos que não estão presentes na linguagem, além de torná-la estática.</p>
                        </div>

                        <div className="card">
                            <SiNodedotjs size={32} color="#f3d353" />
                            <span>Node.js</span>
                            <p>É um ambiente de execução JavaScript, onde é possível criar aplicações sem depender do browser para isso.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/***PROJECTS***/}

            <section className="projects" id="projects">
                <h3 className="title">Projetos</h3>
                <div className="container-home">
                    <div className="portfolio-area">
                        <div className="project">
                            <a href=""><img src={gow} alt="" /></a>
                        </div>

                        <div className="project">
                            <a href=""><img src={gow} alt="" /></a>
                        </div>

                        <div className="project">
                            <a href=""><img src={gow} alt="" /></a>
                        </div>                        
                    </div>
                </div>
            </section>

            {/***FOOTER***/}

            <footer>
                <div className="container-home">
                    <div>
                        <RiCopyrightFill size={22} color="#FFF" />
                        <span>Todos os direitos reservados</span>
                    </div>

                    <div>
                        <span>Desenvolvido por João Souza</span>
                        <RiCodeBoxFill size={23} color="#FFF" />
                    </div>
                </div>
            </footer>

        </main>
    )
}