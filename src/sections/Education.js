import { Container, Row, Col } from "react-bootstrap";

function Education() {
    return (
        <section className="Education" id="education">
            <Container className="position-relative">
                <Row>
                    {/* Left Side - Education Details */}
                    <Col lg={6} md={6}>
                        <div className="d-flex flex-column gap-2">
                            <h2>My Education</h2>
                            <p>
                                My Bachelor’s Journey in Information Technology from Islamia
                                University Provided a Strong Foundation in Core Technologies and
                                Industry Practices
                            </p>
                            <h3>Degree Name</h3>
                            <h4>Bachelor of Science in Information Technology</h4>

                            <h3>Institute Name</h3>
                            <h4>The Islamia University of Bahawalpur</h4>

                            <p className="pt-lg-3">
                                I have learned different Advanced Technologies during my
                                Education journey
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="subjects d-flex flex-column gap-3 w-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <p>Information Security</p>
                                </div>
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-palette"></i>
                                    <p>Web Designing</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-robot"></i>
                                    <p>Machine Learning</p>
                                </div>
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-brands fa-python"></i>
                                    <p>Python</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-user-shield"></i>
                                    <p>Cyber Security</p>
                                </div>
                                <div className="sub d-flex flex-column justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-code"></i>
                                    <p>SQL</p>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;
