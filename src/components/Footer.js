export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="d-flex flex-column Main_Con">
                            <h2>My Portfolio</h2>
                            <p>
                                Designing and developing sleek, responsive,
                                and user-friendly web experiences that turn
                                ideas into digital reality
                            </p>
                            <p>
                                Passionate Frontend Developer crafting clean,
                                scalable, and modern solutions to bring
                                creativity and technology together.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6">
                        <div className="Quick">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a aria-label="about" href="#about">About</a></li>
                                <li><a aria-label="skills" href="#skills">Skills</a></li>
                                <li><a aria-label="projects" href="#projects">Projects</a></li>
                                <li><a aria-label="contact" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="col-md-4 col-sm-6 col-6">
                        <div className="Socials">
                            <h3>Connect</h3>
                            <div className="Social">
                                <a href="#" aria-label="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#" aria-label="github"><i className="fa-brands fa-github"></i></a>
                                <a href="#" aria-label="twitter"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom text-center">
                    <p>© 2025 My Portfolio | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
