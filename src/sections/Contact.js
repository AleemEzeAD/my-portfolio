import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import ContactImg from "../assets/images/index/contact.webp";

function ContactSec() {
    const formRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <section className="Contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side */}
                    <Col lg={6} md={6}>
                        <figure className="d-flex flex-column justify-content-center align-items-center h-100">
                            <img
                                src={ContactImg}
                                alt="contact" loading="lazy"
                            />
                        </figure>
                    </Col>

                    {/* Right Side */}
                    <Col lg={6} md={6}>
                        <div className="d-flex flex-column gap-3 h-100 justify-content-center contact_text">
                            <h2 className="fw-bold">Get In Touch With Me</h2>
                            <p>
                                Got an idea, opportunity, or question? I’d love to hear from you!
                                Drop me a message and let’s create something amazing together.
                            </p>

                            {/* Contact Form */}
                            <Form ref={formRef} className="Myform" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="comment">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Write Message"
                                        required
                                    />
                                </Form.Group>
                                <button aria-label="send message" type="submit" className="hover1">
                                    Send Message ✉️
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Success Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="mb-3">
                        <i className="fa-solid fa-circle-check fa-3x"></i>
                    </div>
                    <h5>Your Message</h5>
                    <p className="mb-3">Delivered Successfully ✅</p>
                    <button aria-label="Close Modal" className="hover1" onClick={() => setShowModal(false)}>Close</button>
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default ContactSec;
