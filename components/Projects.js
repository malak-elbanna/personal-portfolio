import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import project1 from "../assets/imgs/project1.png";
import project2 from "../assets/imgs/project2.png";
import project3 from "../assets/imgs/project3.png";
import project4 from "../assets/imgs/project4.png";
import project5 from "../assets/imgs/project5.png";
import project6 from "../assets/imgs/project6.png";
import project7 from "../assets/imgs/project7.jpg";
import project8 from "../assets/imgs/project8.png";
import project9 from "../assets/imgs/project9.png";
import colorsharp2 from "../assets/imgs/color-sharp2.png";

export const Projects = () => {
    const projects1 = [
        {
            title: "Musicalli",
            description: "A Spotify clone built using React.js, Redux, Shazam Core API, Tailwind CSS, and more.",
            projectImg: project1,
            url: "https://github.com/malak-elbanna/Musicalli.git",
        },
        {
            title: "Sumz",
            description: "Sumz is an Article Summarizer Application using OpenAI's GPT model.",
            projectImg: project2,
            url: "https://openaisumz.netlify.app/",
        },
        {
            title: "Pizzaria AI ChatBot",
            description: "The AI Chatbot is built using specific built-in libraries such as PyTorch, NLTK, NumPy, and JSON. Also, a simple GUI using Tkinter!",
            projectImg: project3,
            url: "https://github.com/malak-elbanna/Pizzaria-AI-ChatBot",
        },
    ];
    const projects2 = [
        {
            title: "Hotel Management System",
            description: "Object-Oriented Programming (C++), Class Inheritance, Polymorphism, Encapsulation, Input/Output, User-defined data types, Control structures, Typecasting, File handling, Exception handling, Pointers, Vectors, Dynamic memory allocation, Functions, and Arrays.",
            projectImg: project4,
            url: "https://github.com/malak-elbanna/Hotel-management-system",
        },
        {
            title: "User Authentication System",
            description: "A simple sign-in/sign-up user authentication system built using Flutter. It can be integrated into a website, an ios, or even an Android app",
            projectImg: project5,
            url: "https://github.com/malak-elbanna/Web-auth-flutter.git",
        },
    ];
    const projects3 = [
        {
            title: "Robotizers",
            description: "Robotizers integrates an Arduino system with an alcohol sprayer and a small ionizer to catch pollutants and wipe the ground with a small circular mop at the bottom of the robot. 1st Place Hardware Category - IEEE ZC CEC Hackathon. Finalist at the 2021 South African Innovation Festival.",
            projectImg: project6,
            url: "https://drive.google.com/file/d/1PNQW5GbKZ61uXRc7h1aEbsnKOYZeWFKA/view",
        },
        {
            title: "Electro-Hub",
            description: "A communication electro-hub unit that can be integrated into any factory or even a smart home. It's controlled by an Arduino UNO, and it employs sensors for movement, temperature, and light detection to optimize its performance.",
            projectImg: project7,
            url: "https://youtu.be/wswoKxvVnSY?si=9B97Vbff3j_sG2vA",
        },
        {
            title: "Hydro Pelton Turbine",
            description: "This project focuses on utilizing wastewater from water-intensive industries by converting its kinetic energy into electrical energy using a hydro Pelton turbine. With high efficiency levels of up to 95%, the generated electricity powers various systems, including air-conditioning devices,  indoor spaces, and outdoor areas. The generated electiricty can be transferred to 'Electro-Hub' for further energy save!",
            projectImg: project9,
        },
    ];
    const projects4 = [
        {
            title: "ProtectTHEM",
            description: "A startup offering convenient therapy pairing service with vibrant community engagement through easy to use platform for everyone to be safe and happy.",
            projectImg: project8,
            url: "http://protect-them.tilda.ws/",
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Check out these highlights for my projects. For more details, visit any of my socials (yes, those round circles of GitHub/LinkedIn :"). Additionally, you can always email me at <a style={{ textDecoration: 'none' }} href= "mailto:s-malak.elbanna@zewailcity.edu.eg">malak elbanna at zewail city dot edu</a>...!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Software</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Systems</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Hardware</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth">Startup</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            projects4.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2} alt="bg"/>
        </section>
    )
}