import { Container, Row, Col } from "react-bootstrap";
// 🔹 Import project images
import proj1 from "../assets/images/projects/chirolift.webp";
import proj2 from "../assets/images/projects/linqbuzz.webp";
import proj3 from "../assets/images/projects/cravestay.webp";
import proj4 from "../assets/images/projects/ezead.webp";

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
                    <Col xs={6} sm={6} md={6} lg={3}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj4} alt="Ezead classified " loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-1 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">September 6, 2025</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Ezead and Auction Site for Buying & Selling</h3>
                                <div>
                                    <a
                                        href="https://www.ezead.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={3}>
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

                    <Col xs={6} sm={6} md={6} lg={3}>
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

                    <Col xs={6} sm={6} md={6} lg={3}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj3} alt="Cravestay " loading="lazy" />
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
