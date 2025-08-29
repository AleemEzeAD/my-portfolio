import { Container, Row, Col } from "react-bootstrap";
// 🔹 Import project images
import proj1 from "../assets/images/projects/chirolift.webp";
import proj2 from "../assets/images/projects/linqbuzz.webp";
import proj3 from "../assets/images/projects/caringcrest.webp";
import proj4 from "../assets/images/projects/david.webp";
import proj5 from "../assets/images/projects/stockrypt.webp";
import proj6 from "../assets/images/projects/cravestay.webp";

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
                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj1} alt="Chirolift " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">April 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Chirolift - Physiotherapy & Chiropractic</h3>
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

                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj2} alt="LINQBUZZ " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">May 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>LINQBUZZ - Blog, Magazine & Personal Blog</h3>
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

                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj3} alt="Caring Crest " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">June 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Caring Crest - Senior Care Services</h3>
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

                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj4} alt="David Dean " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">July 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>David Dean - The UI/UX Designer</h3>
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

                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj5} alt="Stockrypt " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">August 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Stockrypt - Crypto & Stock Exchange</h3>
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

                    <Col lg={4} md={6} xs={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj6} alt="Cravestay " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">September 27, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Cravestay - Luxury Hotel & Resort</h3>
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
