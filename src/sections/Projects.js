import { Container, Row, Col } from "react-bootstrap";
// 🔹 Import project images
import proj1 from "../assets/images/projects/chirolift.png";
import proj2 from "../assets/images/projects/linqbuzz.png";
import proj3 from "../assets/images/projects/caringcrest.png";
import proj4 from "../assets/images/projects/david.png";
import proj5 from "../assets/images/projects/stockrypt.png";
import proj6 from "../assets/images/projects/cravestay.png";

function ProjectsSection() {
    return (
        <section className="Projects" id="projects">
            <Container>
                {/* Heading */}
                <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2">
                    <h2>My Projects</h2>
                    <p>
                        During my time in development, I’ve had the opportunity to work on a
                        range of innovative projects, contributing to the design and
                        development of sleek, user-centric solutions. Each project reflects
                        my dedication to detail, creativity, and technical proficiency. From
                        concept to execution, I have been involved in creating engaging,
                        responsive designs that solve real-world challenges. Here’s a glimpse
                        into some of the projects I’ve successfully brought to life.
                    </p>
                </div>

                {/* Projects Grid */}
                <Row>
                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj1} alt="Chirolift" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">April 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Chirolift - Physiotherapy & Chiropractic</h4>
                                <div>
                                    <a
                                        href="https://themeforest.net/item/chirolift-physiotherapy-chiropractic-html5-website/54306022"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj2} alt="LINQBUZZ" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">May 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>LINQBUZZ - Blog, Magazine & Personal Blog</h4>
                                <div>
                                    <a
                                        href="https://themeforest.net/item/linqbuzz-blog-magazine-html5-template/54374892"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj3} alt="Caring Crest" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">June 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Caring Crest - Senior Care Services</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/caringcrest/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj4} alt="David Dean" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">July 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>David Dean - The UI/UX Designer</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/daviddean/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj5} alt="Stockrypt" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">August 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Stockrypt - Crypto & Stock Exchange</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/stockrypt/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj6} alt="Cravestay" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">September 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Cravestay - Luxury Hotel & Resort</h4>
                                <div>
                                    <a
                                        href="https://themeforest.net/item/cravestay-luxury-hotel-resort-html5-template/54976894"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProjectsSection;
