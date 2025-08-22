import React, { useEffect, useRef } from "react";

const Skills = () => {
    const skills = [
        { name: "Html", progress: 98 },
        { name: "Css", progress: 90 },
        { name: "Javascript", progress: 80 },
        { name: "React Js", progress: 94 },
        { name: "Bootstrap", progress: 72 },
        { name: "Php", progress: 82 },
    ];

    const progressRefs = useRef([]);

    useEffect(() => {
        const animateProgress = (progressBar, progressValue) => {
            const skillProgress = progressBar.querySelector(".SkillProgress");
            const filledProgress = progressBar.querySelector(".FilledProgress");
            const emptyProgress = progressBar.querySelector(".EmptyProgress");

            let currentProgress = 0;
            const duration = 2000; // total animation duration
            const stepTime = duration / 100;
            const incrementValue = progressValue / 100;

            const interval = setInterval(() => {
                currentProgress += incrementValue;

                // update width
                filledProgress.style.width = Math.min(currentProgress, progressValue) + "%";

                // update % text
                skillProgress.textContent =
                    Math.round(Math.min(currentProgress, progressValue)) + "%";

                // move text slightly along bar
                const maxWidth = emptyProgress.offsetWidth;
                const maxLeft = maxWidth - skillProgress.offsetWidth;
                const percentageLeft = (currentProgress / 100) * maxWidth;
                const textLeft = Math.min(percentageLeft, maxLeft);

                skillProgress.style.left = textLeft + "px";

                // stop when target reached
                if (currentProgress >= progressValue) {
                    clearInterval(interval);
                    skillProgress.textContent = progressValue + "%";
                    filledProgress.style.width = progressValue + "%";
                }
            }, stepTime);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressValue = parseInt(
                            entry.target.querySelector(".SkillProgress").dataset.progress,
                            10
                        );
                        animateProgress(entry.target, progressValue);
                        observer.unobserve(entry.target); // run once
                    }
                });
            },
            { threshold: 0.2 }
        );

        progressRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="Skills" id="skills">
            <div className="container">
                <div className="row">
                    {/* Left Col */}
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex flex-column gap-2">
                            <h2>My Creative Skills</h2>
                            <p>
                                With over 3 years of experience in web development, I specialize in building
                                responsive, user-friendly, and performance-optimized websites. I have worked
                                on diverse projects including EzeAD.com, child sites, and ThemeForest-standard
                                designs, ensuring clean code, scalability, and cross-device compatibility. My
                                expertise lies in HTML, CSS, JavaScript,React Js, jQuery, and Bootstrap 5, with a
                                strong focus on delivering efficient solutions that meet both client goals and
                                industry standards. Every project I take on is an opportunity to apply
                                creativity, technical expertise, and strategic problem-solving to deliver
                                exceptional digital experiences.
                            </p>
                        </div>
                    </div>

                    {/* Right Col */}
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex flex-column pb-0 h-100 justify-content-center">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (progressRefs.current[index] = el)}
                                    className="ProgressContainer d-flex flex-column gap-2"
                                >
                                    {/* Skill Label & Value */}
                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                        <p>{skill.name}</p>
                                        <span
                                            className="SkillProgress"
                                            data-progress={skill.progress}
                                            style={{ position: "absolute" }}
                                        >
                                            0
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div>
                                        <div className="EmptyProgress" style={{ position: "relative" }}>
                                            <div
                                                className="FilledProgress"
                                                style={{ width: "0%", transition: "width 0.3s linear" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
