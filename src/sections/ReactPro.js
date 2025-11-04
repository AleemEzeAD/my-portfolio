import { Container, Row, Col } from "react-bootstrap";

// 🔹 Import images
import proj1 from "../assets/images/react/fresh.webp";
import proj2 from "../assets/images/react/transpo.webp";
import proj3 from "../assets/images/react/bitbyte.webp";
import proj4 from "../assets/images/react/portfolio.webp";

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
                    <Col xs={6} sm={6} md={6} lg={3}>
                        <div className="proj h-100 d-flex flex-column gap-2">
                            <figure>
                                <img width="" height="" src={proj4} alt="Cravestay" loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-2 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">Jun 20, 2025</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Aleem FullStack Web Developer Portfolio</h3>
                                <div>
                                    <a
                                        href="https://aleemezead.github.io/my-portfolio/"
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
                                <img width="" height="" src={proj1} alt="Cravestay" loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-2 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">July 8, 2025</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Farm Fresh Hub – Eat Fresh, Live Fresh</h3>
                                <div>
                                    <a
                                        href="https://aleemezead.github.io/fresh/"
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
                                <img width="" height="" src={proj2} alt="LINQBUZZ" loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-2 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">July 30, 2025</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>Transpo-Hub Get you luggage safely</h3>
                                <div>
                                    <a
                                        href="https://aleemezead.github.io/TranspoHub/"
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
                                <img width="" height="" src={proj3} alt="Caring Crest" loading="lazy" />
                            </figure>
                            <div className="d-flex align-items-center gap-md-3 gap-2 icons_P">
                                <i className="fa-regular fa-calendar"></i>
                                <span className="date">August 22, 2025</span>
                            </div>
                            <div className="d-flex flex-column gap-md-3 gap-2 flex-grow-1">
                                <h3>BitByte Technologies IT Solutions</h3>
                                <div>
                                    <a
                                        href="https://bitbytetechnologies.com/"
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

export default ReactProjects;
