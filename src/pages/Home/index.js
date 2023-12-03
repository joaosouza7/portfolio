import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "./styles.css";

import {
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiDocker,
    SiStyledcomponents,
} from "react-icons/si";
import {
    RiGithubFill,
    RiLinkedinBoxFill,
    RiWhatsappLine,
    RiDownloadCloud2Line,
    RiCopyrightFill,
    RiArrowRightCircleFill,
    RiHeart3Fill,
} from "react-icons/ri";
import { FiMail, FiLink } from "react-icons/fi";

import NavBar from "../../components/NavBar";

import bgAction from "../../assets/program.svg";
import profile from "../../assets/profile.jpg";

import weatherApp from "../../assets/projects-img/weather-app.png";
import sc from "../../assets/projects-img/sistema-chamados.png";
import gow from "../../assets/projects-img/gow.png";
import mylink from "../../assets/projects-img/mylink.png";
import loginPage from "../../assets/projects-img/login-page.png";
import imcCalculator from "../../assets/projects-img/imc-calculator.png";
import trips from "../../assets/projects-img/trips.png";
import store from "../../assets/projects-img/store.png";
import totalbarber from "../../assets/projects-img/totalbarber.png";

import cv from "../../assets/cv.pdf";

export default function Home() {
    useEffect(() => {
        ScrollReveal({
            reset: false,
            distance: "30px",
            duration: 2000,
            delay: 400,
        });

        ScrollReveal().reveal(".info-area, .title", {
            delay: 500,
            origin: "left",
        });
        ScrollReveal().reveal(".container-home, .about-area", {
            delay: 600,
            origin: "bottom",
        });
        ScrollReveal().reveal(".bg-home, .btn-download", {
            delay: 600,
            origin: "right",
        });
        ScrollReveal().reveal(".socials a", {
            delay: 500,
            origin: "bottom",
            interval: 200,
        });
        ScrollReveal().reveal(".card", {
            delay: 500,
            origin: "bottom",
            interval: 300,
        });
        ScrollReveal().reveal(".photo", { delay: 500, origin: "top" });
    }, []);

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
                            <p>
                                Programador iniciante buscando oportunidade no
                                mercado de trabalho, entre em contato e vamos
                                conversar!
                            </p>
                        </div>

                        <div className="socials">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/joaosouza7"
                            >
                                <RiGithubFill size={30} color="#FFF" />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/joao-souza07"
                            >
                                <RiLinkedinBoxFill size={30} color="#FFF" />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://api.whatsapp.com/send?phone=5561999435633&text="
                            >
                                <RiWhatsappLine size={30} color="#FFF" />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:joaoosouza07@gmail.com"
                            >
                                <FiMail size={30} color="#FFF" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-home">
                        <img
                            src={bgAction}
                            alt="Homem sentado digitando em um notebook"
                        />
                    </div>
                </div>
            </section>

            {/***ABOUT***/}

            <section className="about" id="about">
                <h3 className="title">
                    Quem sou<span>?</span>
                </h3>
                <div className="container-home">
                    <div className="photo">
                        <img src={profile} alt="Foto de perfil" />
                    </div>

                    <div className="about-area">
                        <div className="about-info">
                            <p>
                                Sou um Desenvolvedor{" "}
                                <span className="span">Front-End</span>{" "}
                                apaixonado por criar soluções eficientes e
                                inovadoras para problemas reais de diversos
                                segmentos. Desde jovem me sinto envolvido com
                                tecnologia e a partir da minha primeira
                                experiência com programação, mergulhei nesse
                                mundo e estou sempre explorando e buscando
                                aprender continuamente.
                            </p>
                            <br />
                            <p>
                                Priorizo o{" "}
                                <span className="span">
                                    desenvolvimento web
                                </span>{" "}
                                como foco de carreira, pois desse modo tenho
                                liberdade para fazer o que mais gosto na
                                programação - que é criar produtos incríveis,
                                que de alguma forma possam{" "}
                                <span className="span">
                                    impactar a vida das pessoas
                                </span>
                                . E por essa razão, venho me especializando
                                diariamente nessa área, seja criando projetos
                                pessoais (que você pode conferir no meu aqui) ou
                                por meio de cursos online.
                            </p>
                        </div>
                        <a
                            href={cv}
                            download="Currículo - João Pedro de Souza Barroso"
                            className="btn-download"
                        >
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
                            <p>
                                É uma linguagem de marcação, onde marcamos os
                                elementos para definir quais informações a
                                página vai exibir.
                            </p>
                        </div>

                        <div className="card">
                            <SiCss3 size={32} color="#f3d353" />
                            <span>CSS</span>
                            <p>
                                É uma linguagem de folha de estilo composta por
                                “camadas”, usado para estilizar as páginas HTML.
                            </p>
                        </div>

                        <div className="card">
                            <SiJavascript size={32} color="#f3d353" />
                            <span>JavaScript</span>
                            <p>
                                É uma linguagem de programação que permite
                                implementar elementos dinâmicos em páginas web.
                            </p>
                        </div>

                        <div className="card">
                            <SiReact size={32} color="#f3d353" />
                            <span>React</span>
                            <p>
                                É uma biblioteca JavaScript com foco em criar
                                interfaces de usuário de forma "componetizada".
                            </p>
                        </div>

                        <div className="card">
                            <SiNextdotjs size={32} color="#f3d353" />
                            <span>Next.js</span>
                            <p>
                                Sua estrutura e recursos como SSR e roteamento
                                automático facilitam o desenvolvimento de
                                aplicações web de forma mais rápida e eficiente.
                            </p>
                        </div>

                        <div className="card">
                            <SiTailwindcss size={32} color="#f3d353" />
                            <span>Tailwind CSS</span>
                            <p>
                                É um framework CSS que nos fornece classes
                                utilitárias de propósito único e que nos ajudam
                                a projetar nossas páginas da web.
                            </p>
                        </div>

                        <div className="card">
                            <SiTypescript size={32} color="#f3d353" />
                            <span>TypeScript</span>
                            <p>
                                É um superset do JavaScript que incluir recursos
                                que não estão presentes na linguagem, além de
                                torná-la estática.
                            </p>
                        </div>

                        <div className="card">
                            <SiNodedotjs size={32} color="#f3d353" />
                            <span>Node</span>
                            <p>
                                É um ambiente de execução JavaScript, onde é
                                possível criar aplicações sem depender do
                                browser para isso.
                            </p>
                        </div>

                        <div className="card">
                            <SiSass size={32} color="#f3d353" />
                            <span>Sass</span>
                            <p>
                                É um pré-processador CSS que adiciona alguns
                                recursos que não estão disponíveis de forma
                                nativa no CSS.
                            </p>
                        </div>

                        <div className="card">
                            <SiDocker size={32} color="#f3d353" />
                            <span>Docker</span>
                            <p>
                                É uma plataforma para desenvolvimento,
                                implementação e gerenciamento de aplicativos
                                conteinerizados.
                            </p>
                        </div>

                        <div className="card">
                            <SiStyledcomponents size={32} color="#f3d353" />
                            <span>Styled Components</span>
                            <p>
                                O Styled-components é uma biblioteca poderosa
                                para estilização de componentes em aplicações
                                React.
                            </p>
                        </div>

                        <div className="card">
                            <RiGithubFill size={32} color="#f3d353" />
                            <span>Github</span>
                            <p>
                                É uma plataforma para hospedagem e controle de
                                versão de código utilizando o sistema Git como
                                base
                            </p>
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
                                    <img src={trips} alt="Full Stack Trips" />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/fullstackweek-trips"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Trips</h3>
                                    </a>
                                    <span>
                                        💻 Sistema de Reserva de Viagens
                                        desenvolvido com Next.js, Typescript e
                                        Tailwind
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/fullstackweek-trips"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={store} alt="Full Stack Store" />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/joao-fsw-store"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>E-commerce</h3>
                                    </a>
                                    <span>
                                        💻 E-commerce de produtos tech, com
                                        gerenciamento de carrinho e Integração
                                        com o Stripe.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/joao-fsw-store"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={totalbarber} alt="Total Barber" />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/totalbarber"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Total Barber</h3>
                                    </a>
                                    <span>
                                        💻 Landing Page de uma barbearia.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/totalbarber"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={weatherApp} alt="Weather App" />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/weather-app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Weather App</h3>
                                    </a>
                                    <span>
                                        🌥️ Aplicativo que permite consultar as
                                        condições meteorológicas de um lugar.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/weather-app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img src={sc} alt="Sistema de chamados" />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/sistema-chamados"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Sistema de chamados</h3>
                                    </a>
                                    <span>
                                        💻 Sistema de chamados responsivo feito
                                        com React e conexão com o Firebase.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/sistema-chamados"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
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
                                    <a
                                        href="https://github.com/joaosouza7/login-page"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Tela de Login</h3>
                                    </a>
                                    <span>
                                        💻 Tela de login e cadastro de usuários
                                        desenvolvida com React.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/login-page"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
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
                                    <a
                                        href="https://github.com/joaosouza7/mylink"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>MyLink</h3>
                                    </a>
                                    <span>
                                        💻 Encurtador de links com React.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/mylink"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img
                                        src={imcCalculator}
                                        alt="Calculadora IMC"
                                    />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/imc-calculator"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>Calculadora IMC</h3>
                                    </a>
                                    <span>💻 Calculadora IMC com React.</span>
                                    <a
                                        href="https://github.com/joaosouza7/imc-calculator"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RiArrowRightCircleFill size={38} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="flip-project-inner">
                                <div className="flip-project-front">
                                    <img
                                        src={gow}
                                        alt="Landing Page do jogo God of War Ragnarok"
                                    />
                                </div>
                                <div className="flip-project-back">
                                    <a
                                        href="https://github.com/joaosouza7/god-of-war-ragnarok"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLink size={20} />
                                        <h3>GOD of War Ragnarok</h3>
                                    </a>
                                    <span>
                                        💻 Landing Page do jogo God of War
                                        Ragnarok.
                                    </span>
                                    <a
                                        href="https://github.com/joaosouza7/god-of-war-ragnarok"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
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
    );
}
