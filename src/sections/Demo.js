import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cube = () => {
    const expRef = useRef(null);

    useEffect(() => {
        // 🔹 Cube rotation by mouse
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

        // 🔹 Boxes hover animation with GSAP
        const section = expRef.current;
        const boxes = gsap.utils.toArray(".Boxes");

        const tl = gsap.to(boxes, {
            rotation: 360,
            duration: 6,
            ease: "linear",
            repeat: -1, // infinite spin
            paused: true,
            transformOrigin: "center center",
        });

        const handleEnter = () => tl.play();
        const handleLeave = () => tl.pause();

        if (section) {
            section.addEventListener("mouseenter", handleEnter);
            section.addEventListener("mouseleave", handleLeave);
        }

        // 🔹 Cleanup
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            if (section) {
                section.removeEventListener("mouseenter", handleEnter);
                section.removeEventListener("mouseleave", handleLeave);
            }
        };
    }, []);

    return (
        <section className="Demo_Parent" ref={expRef}>
            <div className="container position-relative">
                {/* Boxes */}
                <div className="Box1 Boxes"></div>
                <div className="Box2 Boxes"></div>
                <div className="Box3 Boxes"></div>
                <div className="Box4 Boxes"></div>
                <div className="Box5 Boxes"></div>
                <div className="Box6 Boxes"></div>
                <div className="Box7 Boxes"></div>
                <div className="Box8 Boxes"></div>

                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column gap-2">
                            <h2>Interactive 3D Experience</h2>
                            <h3>
                                Move your mouse and watch the cube respond instantly with smooth
                                3D rotations.
                            </h3>
                            <ul className="d-flex flex-column gap-1">
                                <li>🎮 <strong>Mouse-controlled Rotation</strong></li>
                                <li>⚡ <strong>Smooth Animations</strong></li>
                                <li>🖥️ <strong>Responsive Design</strong></li>
                                <li>🔥 <strong>Pure CSS + JavaScript Power</strong></li>
                                <li>🌐 <strong>Engaging User Interaction</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-7">
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
