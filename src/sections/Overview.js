import Overview from '../assets/images/index/web.png';


const Intro = () => {
    return (
        <section className="Intro" id="intro">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex flex-column gap-3 h-100 align-items-md-start align-items-center justify-content-center text-md-start text-center">
                            <h2>Personal Overview</h2>
                            <p>
                                A passionate Website Developer with expertise at Evonicsoft. I love
                                transforming creative ideas into dynamic, user-friendly websites. With
                                a solid foundation in both frontend and backend technologies, I aim to
                                create seamless web experiences that are not only visually stunning
                                but also technically sound. I believe that every project is an
                                opportunity to learn and grow, and I am dedicated to keeping up with
                                the latest industry trends. Whether it’s crafting responsive designs or
                                optimizing performance, I take pride in delivering high-quality work
                                that meets the needs of clients and users alike.
                            </p>
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
