import React, { useEffect } from "react";

const Cube = () => {
    useEffect(() => {
        const cube = document.getElementById("cube");

        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            const rotateY = x * 360;
            const rotateX = -y * 360;

            if (cube) {
                cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="Demo_Parent">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column for Cube */}
                    <div className="col-md-4">
                        <div className="d-flex flex-column gap-2">
                            <h2>Interactive 3D Experience</h2>
                            <h3>Move your mouse and watch the cube respond instantly with smooth 3D rotations.</h3>
                            <ul className="d-flex flex-column gap-1">
                                <li>
                                    <p>🎮 <strong>Mouse-controlled Rotation</strong> </p>
                                </li>
                                <li>
                                    <p>⚡ <strong>Smooth Animations</strong></p>
                                </li>
                                <li>
                                    <p>🖥️ <strong>Responsive Design</strong> </p>
                                </li>
                                <li>
                                    <p>🔥 <strong>Pure CSS + JavaScript Power</strong> </p>
                                </li>
                                <li>
                                    <p>🌐 <strong>Engaging User Interaction</strong></p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column for Content */}
                    <div className="col-md-8">
                        <div className="Demo">
                            <div className="scene" id="scene">
                                <div className="cube" id="cube">
                                    <div className="face front"></div>
                                    <div className="face back"></div>
                                    <div className="face right"></div>
                                    <div className="face left"></div>
                                    <div className="face top"></div>
                                    <div className="face bottom"></div>
                                </div>
                                <div className="inner-cube">
                                    <div className="inner-face inner-front"></div>
                                    <div className="inner-face inner-back"></div>
                                    <div className="inner-face inner-right"></div>
                                    <div className="inner-face inner-left"></div>
                                    <div className="inner-face inner-top"></div>
                                    <div className="inner-face inner-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cube;
