import { Container, Row, Col } from "react-bootstrap";
import proj1 from "../assets/images/react/fresh.webp";
import proj2 from "../assets/images/react/transpo.webp";
import proj3 from "../assets/images/react/bitbyte.webp";
import proj4 from "../assets/images/react/fleximart.webp";

const projects = [
    {
        img: proj4,
        alt: "FlexiMart",
        date: "Jun 20, 2025",
        title: "FlexiMart – Your Smart & Flexible Online Marketplace",
        link: "https://aleemezead.github.io/fleximart/"
    },
    {
        img: proj1,
        alt: "Farm Fresh Hub",
        date: "July 8, 2025",
        title: "Farm Fresh Hub – Eat Fresh, Live Fresh",
        link: "https://aleemezead.github.io/fresh/"
    },
    {
        img: proj2,
        alt: "Transpo-Hub",
        date: "July 30, 2025",
        title: "Transpo-Hub – Get your luggage safely",
        link: "https://aleemezead.github.io/TranspoHub/"
    },
    {
        img: proj3,
        alt: "BitByte Technologies",
        date: "August 22, 2025",
        title: "BitByte Technologies – IT Solutions",
        link: "https://bitbytetechnologies.com/"
    }
];

function ReactProjects() {
    return (
        <section className="Projects" id="projects">
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2">
                    <h2>React Js Projects</h2>
                    <p>
                        I have worked on creative React.js projects designed with clean code and modern interfaces.
                        These projects are fully responsive, user-friendly, and focused on providing seamless user
                        experiences.
                    </p>
                </div>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} xs={6} sm={6} md={6} lg={3}>
                            <div className="proj h-100 d-flex flex-column gap-2">
                                <figure>
                                    <img src={project.img} alt={project.alt} loading="lazy" />
                                </figure>
                                <div className="d-flex align-items-center gap-md-3 gap-2 icons_P">
                                    <i className="fa-regular fa-calendar"></i>
                                    <span className="date">{project.date}</span>
                                </div>
                                <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                    <h3>{project.title}</h3>
                                    <div>
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            View Project <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ReactProjects;
