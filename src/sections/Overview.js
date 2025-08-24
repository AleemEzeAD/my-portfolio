import Overview from '../assets/images/index/overview.png';


const Intro = () => {
    return (
        <section className="Intro" id="intro">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex flex-column gap-3 h-100 align-items-md-start align-items-center justify-content-center text-md-start text-center">
                            <h2>Design & Development Expertise</h2>
                            <p>
                                I specialize in building modern, responsive, and interactive web applications using a strong foundation in HTML, CSS,
                                and JavaScript. With expertise in React.js and GSAP,
                                I craft seamless user interfaces enhanced with smooth animations and engaging interactions.
                            </p>
                            <p>
                                I am skilled in Bootstrap for rapid UI development and have hands-on
                                experience with PHP and Laravel for dynamic and scalable
                                backend solutions. Additionally, I explore Node.js
                                to develop full-stack applications, ensuring robust performance and efficiency.
                            </p>
                            <p>
                                From clean, ThemeForest-standard code to pixel-perfect designs,
                                I focus on delivering creative, functional,
                                and user-friendly digital experiences.
                            </p>
                            <div className="mt-2">
                                <a className="hover1"
                                    href="assets/images/Resume/Aleem_Resume.pdf" target="_blank" download>Download
                                    CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <figure>
                            <img src={Overview} alt="intro" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
