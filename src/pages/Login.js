import React, { useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const AnimatedSignIn = () => {
    useEffect(() => {
        // Create floating boxes
        const floatingBoxes = document.querySelector('.Login .floating-boxes');
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
            const boxes = document.querySelectorAll('.Login .box');
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
        <section className="Login">
            <div className="floating-boxes"></div>

            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                        <Card className="login-box">
                            <Card.Body className="p-4 p-md-5">
                                <h2 className="text-center mb-4">SIGN IN</h2>

                                <Form>
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue="thecodingwizard"
                                            className="custom-input"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            className="custom-input"
                                        />
                                    </Form.Group>

                                    <div className="d-flex justify-content-between mb-4">
                                        <a href="#" className="text-decoration-none options-link">Forgot Password</a>
                                        <a href="#" className="text-decoration-none options-link">Signup</a>
                                    </div>

                                    <Button variant="primary" className="w-100 login-btn">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AnimatedSignIn;