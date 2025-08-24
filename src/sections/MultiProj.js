import { Container, Row, Col } from "react-bootstrap";

// 🔹 Import images
import proj1 from "../assets/images/translated/cravestay.png";
import proj2 from "../assets/images/translated/linqbuzz.png";
import proj3 from "../assets/images/translated/caring.png";

function MultiLanguageProjects() {
    return (
        <section className="Projects" id="projects">
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2">
                    <h2>Multi Language Projects</h2>
                    <p>
                        I’ve worked on innovative projects now available in multiple
                        languages, including Arabic, ensuring they reach a wider audience.
                        Each project reflects my creativity, technical expertise, and
                        dedication to solving real-world challenges. Explore my work in
                        English and Arabic!
                    </p>
                </div>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img src={proj1} alt="Cravestay" />
                            </figure>
                            <div className="d-flex align-items-center gap-3 pt-4 pb-3">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">December 8, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Cravestay Luxury Hotel and Resort</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/cravestayar/"
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
                                <span className="date">December 17, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>LINQBUZZ - Blog, Magazine & Personal Blog</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/linqbuzzar/"
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
                                <span className="date">December 28, 2024</span>
                            </div>
                            <div className="d-flex flex-column gap-3 flex-grow-1">
                                <h4>Caring Crest - Senior Care Services</h4>
                                <div>
                                    <a
                                        href="https://html-templates.evonicmedia.com/caringcrestar/"
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

export default MultiLanguageProjects;
