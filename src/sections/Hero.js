import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/images/index/Hero1.webp';

const AnimatedHero = () => {
    useEffect(() => {
        // Create floating boxes
        const floatingBoxes = document.querySelector('.Hero .floating-boxes');
        const boxCount = 15;

        for (let i = 0; i < boxCount; i++) {
            const box = document.createElement('div');
            box.className = 'box';

            const size = Math.random() * 100 + 50;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.left = `${Math.random() * 100}%`;
            box.style.top = `${Math.random() * 100}%`;
            box.style.transform = `rotate(${Math.random() * 360}deg)`;

            floatingBoxes.appendChild(box);
        }

        const handleMouseMove = (e) => {
            const boxes = document.querySelectorAll('.Hero .box');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            boxes.forEach((box) => {
                const boxX = parseFloat(box.style.left) / 100;
                const boxY = parseFloat(box.style.top) / 100;

                const distanceX = mouseX - boxX;
                const distanceY = mouseY - boxY;

                const moveX = distanceX * -10;
                const moveY = distanceY * -10;

                box.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${Math.random() * 360}deg)`;

                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance < 0.3) {
                    box.style.boxShadow = `0 0 ${30 * (1 - distance / 0.3)}px rgba(255, 255, 255, ${0.5 * (1 - distance / 0.3)})`;
                    box.style.background = `rgba(255, 255, 255, ${0.2 * (1 - distance / 0.3)})`;
                } else {
                    box.style.boxShadow = 'none';
                    box.style.background = 'rgba(255, 255, 255, 0.05)';
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="Hero overflow-hidden">
            <div className="floating-boxes"></div>
            <Container className="d-flex justify-content-center align-items-center">
                <Row className="w-100 justify-content-center">
                    <Col lg={6}>
                        <div className=" h-100 d-flex flex-column gap-3 text-lg-start text-center align-items-lg-start align-items-center justify-content-center">
                            <div className="d-flex align-items-center">
                                <h1 className="animated-text">
                                    Hi
                                </h1>
                                <span className="wave">👋</span>
                            </div>
                            <h1>
                                This is <strong>Aleem Abbas </strong>
                                Professional Web Developer
                            </h1>

                            <div className="d-flex align-items-center w-100 mt-lg-3">
                                <a href={`${process.env.PUBLIC_URL}/Aleem_Resume.pdf`} target="_blank" className="join-btn hover1"
                                    type="button">View My Resume </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <figure>
                                <img src={HeroImage} alt="hero" className="hero-img" width="" height="" fetchPriority="high" decoding="async" />
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AnimatedHero;