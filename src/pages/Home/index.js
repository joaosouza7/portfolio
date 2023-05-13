import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './styles.css';

import { SiHtml5, SiCss3, SiNodedotjs, SiSass, SiJavascript, SiTypescript, SiReact } from 'react-icons/si';
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine, RiDownloadCloud2Line, RiCopyrightFill, RiCodeBoxFill, RiArrowRightCircleFill, RiHeart3Fill } from 'react-icons/ri';
import { FiMail, FiLink } from 'react-icons/fi';

import NavBar from "../../components/NavBar";

import bgAction from '../../assets/program.svg';
import profile from '../../assets/profile.jpg';
import sc from '../../assets/sistema-chamados01.png';
import gow from '../../assets/gow.png';
import mylink from '../../assets/mylink.png';
import loginPage from '../../assets/login-page.png';
import imcCalculator from '../../assets/imc-calculator.png';
import lol from '../../assets/lol.png';

import cv from '../../assets/cv.pdf';

export default function Home() {

    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '30px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.info-area, .title', { delay: 500, origin: 'left' });
        ScrollReveal().reveal('.container-home, .about-area', { delay: 600, origin: 'bottom' });
        ScrollReveal().reveal('.bg-home, .btn-download', { delay: 600, origin: 'right' });
        ScrollReveal().reveal('.socials a', { delay: 500, origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.card', { delay: 500, origin: 'bottom', interval: 300 });
        ScrollReveal().reveal('.photo', { delay: 500, origin: 'top' });
    }, [])

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
                            <p>Aspirante a Desenvolvedor <span className="span">Front-End Júnior</span> em constante evolução, recém graduado em Sistemas para Internet pelo Instituto Federal de Brasília (IFB).</p>
                            <br />
                            <p>Organizado, proativo, dedicado e adaptável a mudanças, com sólidas <span className="span">habilidades em resolução de problemas</span>. Apaixonado por desenvolver soluções tecnológicas para problemas complexos e reais do cotidiano.</p>
                            <br />
                            <p>Possuo <span className="span">sólidos conhecimentos</span> em HTML, CSS, JavaScript e React.js e atualmente estudando e me aperfeiçoando em React Native, TypeScript e Node.js. Tenho interesse em desenvolvimento de aplicações web e mobile, bem como, melhores práticas de desenvolvimento.</p>
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
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={sc} alt="Sistema de chamados" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/sistema-chamados" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 01</h3>
                                    </a>
                                    <span>💻 Sistema de chamados responsivo feito com React e conexão com o Firebase.</span>
                                    <a href="https://github.com/joaosouza7/sistema-chamados" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={loginPage} alt="Login Page" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/login-page" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 02</h3>
                                    </a>
                                    <span>💻 Tela de login e cadastro de usuários desenvolvida com React.</span>
                                    <a href="https://github.com/joaosouza7/login-page" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={mylink} alt="MyLink" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/mylink" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 03</h3>
                                    </a>
                                    <span>💻 Encurtador de links com React.</span>
                                    <a href="https://github.com/joaosouza7/mylink" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={imcCalculator} alt="Calculadora IMC" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/imc-calculator" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 04</h3>
                                    </a>
                                    <span>💻 Calculador de IMC com React.</span>
                                    <a href="https://github.com/joaosouza7/imc-calculator" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={lol} alt="Tela de login do jogo LOL" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/league-of-legends-login-page" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 05</h3>
                                    </a>
                                    <span>💻 Clone da tela de login do jogo League of Legends</span>
                                    <a href="https://github.com/joaosouza7/league-of-legends-login-page" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={gow} alt="Landing Page do jogo God of War Ragnarok" />
                                </div>
                                <div className="flip-project-back">
                                    <a href="https://github.com/joaosouza7/god-of-war-ragnarok" target="_blank" rel="noreferrer">
                                        <FiLink size={20}  />
                                        <h3>Projeto 06</h3>
                                    </a>
                                    <span>💻 Landing Page do jogo God of War Ragnarok.</span>
                                    <a href="https://github.com/joaosouza7/god-of-war-ragnarok" target="_blank" rel="noreferrer">
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>
              
                    </div>
                </div>
            </section>

            {/***FOOTER***/}

            <footer>
                <div className="container-footer">
                    <div>
                        <RiCopyrightFill size={22} color="#FFF" />
                        <span>Todos os direitos reservados</span>
                    </div>

                    <span>
                        Desenvolvido com <RiHeart3Fill color="#dc3545" />
                        por João Souza
                    </span>
                </div>
            </footer>

        </main>
    )
}