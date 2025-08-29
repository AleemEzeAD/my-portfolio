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
            const duration = 2000;
            const stepTime = duration / 100;
            const incrementValue = progressValue / 100;

            const interval = setInterval(() => {
                currentProgress += incrementValue;

                // bar width update
                filledProgress.style.width =
                    Math.min(currentProgress, progressValue) + "%";

                // % text update
                skillProgress.textContent =
                    Math.round(Math.min(currentProgress, progressValue)) + "%";

                // % position clamp
                const maxWidth = emptyProgress.offsetWidth;
                const maxLeft = maxWidth - skillProgress.offsetWidth;
                const percentageLeft = (currentProgress / 100) * maxWidth;

                let textLeft = percentageLeft;
                if (textLeft < 0) textLeft = 0;
                if (textLeft > maxLeft) textLeft = maxLeft;

                skillProgress.style.left = textLeft + "px";

                // stop at target
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
                        observer.unobserve(entry.target);
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
                        <div className="d-flex flex-column gap-2 align-items-md-start align-items-center justify-content-md-start justify-content-center text-md-start text-center">
                            <h2>My Creative Skills</h2>
                            <p>
                                With over 3 years of experience in web development, I specialize
                                in building responsive, user-friendly, and
                                performance-optimized websites. I have worked on diverse
                                projects including EzeAD.com, child sites, and
                                ThemeForest-standard designs, ensuring clean code, scalability,
                                and cross-device compatibility.
                            </p>
                            <p>
                                My expertise lies in HTML, CSS, JavaScript, React Js, jQuery,
                                and Bootstrap 5, with a strong focus on delivering efficient
                                solutions that meet both client goals and industry standards.
                                Every project I take on is an opportunity to apply creativity,
                                technical expertise, and strategic problem-solving to deliver
                                exceptional digital experiences.
                            </p>
                            <div className="mt-2">
                                <a
                                    className="hover1"
                                    href="assets/images/Resume/Aleem_Resume.pdf"
                                    target="_blank"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
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
                                    {/* Skill Label */}
                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                        <p>{skill.name}</p>
                                        <span
                                            className="SkillProgress"
                                            data-progress={skill.progress}
                                        >
                                            0%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div>
                                        <div className="EmptyProgress">
                                            <div className="FilledProgress"></div>
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
