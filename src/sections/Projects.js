import { Container, Row, Col } from "react-bootstrap";
// 🔹 Import project images
import proj1 from "../assets/images/projects/chirolift.webp";
import proj2 from "../assets/images/projects/linqbuzz.webp";
import proj3 from "../assets/images/projects/cravestay.webp";
import proj4 from "../assets/images/projects/ezead.webp";

const projects = [
    {
        img: proj4,
        alt: "Ezead Classified",
        date: "September 6, 2025",
        title: "Ezead and Auction Site for Buying & Selling",
        link: "https://www.ezead.com/"
    },
    {
        img: proj1,
        alt: "Chirolift",
        date: "April 27, 2024",
        title: "Chirolift - Physiotherapy & Chiropractic",
        link: "https://themeforest.net/item/chirolift-physiotherapy-chiropractic-html5-website/54306022"
    },
    {
        img: proj2,
        alt: "LINQBUZZ",
        date: "May 27, 2024",
        title: "LINQBUZZ - Blog, Magazine & Personal Blog",
        link: "https://themeforest.net/item/linqbuzz-blog-magazine-html5-template/54374892"
    },
    {
        img: proj3,
        alt: "Cravestay",
        date: "September 27, 2024",
        title: "Cravestay - Luxury Hotel & Resort",
        link: "https://themeforest.net/item/cravestay-luxury-hotel-resort-html5-template/54976894"
    }
];

function ProjectsSection() {
    return (
        <section className="Projects" id="projects">
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2">
                    <h2>Bootstrap Projects</h2>
                    <p>
                        I’ve worked on diverse projects, focusing on sleek, user-centric designs and responsive solutions.
                        Each project reflects my creativity, technical skills, and commitment to solving real-world challenges.
                    </p>
                </div>

                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} xs={6} sm={6} md={6} lg={3}>
                            <div className="proj h-100 d-flex flex-column gap-2">
                                <figure>
                                    <img src={project.img} alt={project.alt} loading="lazy" />
                                </figure>
                                <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
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

export default ProjectsSection;
