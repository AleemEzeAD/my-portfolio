import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, Row, Col } from "react-bootstrap";

import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import javascript from "../assets/images/skills/javascript.svg";
import react from "../assets/images/skills/react.svg";
import figma from "../assets/images/skills/figma.svg";

const AdditionalSkills = () => {
    const skillsRef = useRef(null);

    const skills = [
        { src: html, alt: "HTML" },
        { src: css, alt: "CSS" },
        { src: bootstrap, alt: "Bootstrap" },
        { src: javascript, alt: "JavaScript" },
        { src: react, alt: "React" },
        { src: figma, alt: "Figma" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // entrance animation
            gsap.from(".skill-item", {
                opacity: 0,
                scale: 0.5,
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
            });

            // continuous floating animation
            gsap.utils.toArray(".skill-icon").forEach((icon, i) => {
                gsap.to(icon, {
                    y: gsap.utils.random(-15, 15),
                    x: gsap.utils.random(-10, 10),
                    rotation: gsap.utils.random(-10, 10),
                    duration: gsap.utils.random(2, 4),
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    delay: i * 0.1,
                });
            });

            // bubbles/stars effect on mouse move
            const section = skillsRef.current;

            const createParticle = (x, y) => {
                const particle = document.createElement("div");
                particle.className = "particle";
                section.appendChild(particle);

                // start state (tiny & transparent)
                gsap.set(particle, {
                    x,
                    y,
                    scale: 0,
                    opacity: 0,
                });

                // appear smoothly
                gsap.to(particle, {
                    scale: gsap.utils.random(1.6, 2.8),
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });

                // float + fade out
                gsap.to(particle, {
                    y: y - gsap.utils.random(40, 100), // float upward
                    x: x + gsap.utils.random(-30, 30), // small sideways drift
                    opacity: 0,
                    scale: 0,
                    delay: 0.3, // after appearing
                    duration: gsap.utils.random(1.2, 2),
                    ease: "power1.inOut",
                    onComplete: () => particle.remove(),
                });
            };

            const handleMove = (e) => {
                const rect = section.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // create 2 particles per move for smooth trail
                for (let i = 0; i < 2; i++) {
                    createParticle(x, y);
                }
            };

            section.addEventListener("mousemove", handleMove);

            return () => section.removeEventListener("mousemove", handleMove);
        }, skillsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={skillsRef} className="AdditionalSkills">
            <Container>
                <div className="d-flex flex-column gap-2 content">
                    <h2>My Professional Services</h2>
                    <p>
                        I offer a wide range of services tailored to bring ideas to life and help
                        businesses succeed online. From developing responsive and user-friendly
                        websites to creating scalable digital solutions, my services combine
                        creativity, technical expertise, and a problem-solving mindset to deliver
                        results that truly make an impact.
                    </p>
                </div>


                <Row className="g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <Col
                            key={index}
                            xs={4}
                            sm={3}
                            md={2}
                            className="skill-item text-center"
                        >
                            <div className="d-flex flex-column boxes">
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="img-fluid mb-2 skill-icon"
                                />
                                <p className="fw-medium">{skill.alt}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AdditionalSkills;
