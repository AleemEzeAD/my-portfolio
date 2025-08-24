import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Experience from "../assets/images/index/exp.png";
import { Container, Row, Col } from "react-bootstrap";

function ExperienceSection() {
    const expRef = useRef(null);

    useEffect(() => {
        const section = expRef.current;
        const boxes = gsap.utils.toArray(".Boxes");
        const tl = gsap.to(boxes, {
            rotation: 360,
            duration: 6,
            ease: "linear",
            repeat: 1,
            paused: true,
            transformOrigin: "center center",
        });
        const handleEnter = () => tl.play();
        const handleLeave = () => tl.pause();

        section.addEventListener("mouseenter", handleEnter);
        section.addEventListener("mouseleave", handleLeave);

        return () => {
            section.removeEventListener("mouseenter", handleEnter);
            section.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <section className="Exp" id="exp" ref={expRef}>
            <Container className="position-relative z-2">
                <Row>
                    <Col lg={6} md={6}>
                        {/* Jitne bhi boxes banao → sab animate honge */}
                        <div className="Box1 Boxes"></div>
                        <div className="Box2 Boxes"></div>
                        <div className="Box3 Boxes"></div>
                        <div className="Box4 Boxes"></div>
                        <div className="Box5 Boxes"></div>
                        <div className="Box6 Boxes"></div>
                        <div className="Box7 Boxes"></div>
                        <div className="Box8 Boxes"></div>

                        <div className="d-flex flex-column gap-2 align-items-md-start align-items-center justify-content-md-start justify-content-center text-md-start text-center">
                            <h2>Professional Experience</h2>

                            <h3>
                                March <span>2024</span> – January <span>13, 2025</span>
                            </h3>
                            <h3>
                                <span>FRONT</span> – END DEVELOPER at <span>EvonicSoft</span> Private LTD.
                            </h3>

                            <h3>
                                January <span>14, 2025</span> – Present
                            </h3>
                            <h3>
                                <span>FRONT</span> – END DEVELOPER at <span>Eze Technologies</span>
                            </h3>

                            <h3>2023 – 3 Months</h3>
                            <h3>
                                Frontend Developer at <span>Dev Syntrix</span> (Remote, Lahore – Night Shift)
                            </h3>

                            <h3>
                                Code and Build Something Amazing <span>Everyday</span>
                            </h3>
                        </div>
                    </Col>

                    <Col lg={6} md={6}>
                        <figure className="d-flex flex-column justify-content-center align-items-center h-100">
                            <img src={Experience} alt="exp" />
                        </figure>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ExperienceSection;
