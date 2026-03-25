"use client";

import RevealOnScroll from "./RevealOnScroll";
import TechnicalArsenal from "./TechnicalArsenal";

const milestones = [
    { title: "DSA Enthusiast", desc: "Solved 100+ problems on LeetCode." },
    { title: "Full-Stack Developer", desc: "Actively building and deploying MERN apps." },
    { title: "Problem Solver", desc: "5-star in C++ & 3-star in Python on HackerRank." },
    { title: "Continuous Learner", desc: "Always exploring new web technologies." },
];

export default function AboutSection() {
    return (
        <>
            {/* Fragments / Milestones Marquee */}
            <section className="marquee-section" id="milestones">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Milestones</p>
                    </RevealOnScroll>
                        <h1 className="section-title">
                            Fragments <em>of me.</em>
                        </h1>
                </div>

                <div className="marquee-wrapper">
                    {[...milestones, ...milestones].map((m, i) => (
                        <div className="marquee-item" key={i}>
                            <h4>{m.title}</h4>
                            <p>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About / Personal Story */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <RevealOnScroll>
                        <h1 className="section-title" style={{ marginBottom: "60px" }}>
                            About.
                        </h1>
                    </RevealOnScroll>
                    <div className="about-grid">
                        <RevealOnScroll>
                            <div className="about-image-container">
                                <img src="/profile.jpg" alt="Shashi Prabha portrait" style={{ transform: "scale(1.15)" }} />
                            </div>
                        </RevealOnScroll>

                        <div>
                            <div className="about-highlights">
                                <RevealOnScroll>
                                    <div className="about-highlight-item">
                                        <h3>DSA Enthusiast</h3>
                                        <p>
                                            Mastering core data structures and algorithms to solve complex
                                            problems and optimize performance.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={1}>
                                    <div className="about-highlight-item">
                                        <h3>Full-stack Developer</h3>
                                        <p>
                                            Building responsive web applications using the MERN stack
                                            along with modern frontend libraries.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={2}>
                                    <div className="about-highlight-item">
                                        <h3>Problem Solver</h3>
                                        <p>
                                            Passionate about tackling algorithmic challenges and continuously
                                            improving logical thinking abilities.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={3}>
                                    <div className="about-highlight-item">
                                        <h3>Continuous Learner</h3>
                                        <p>
                                            Always adapting to new technologies and exploring advanced 
                                            development workflows.
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            </div>

                            <RevealOnScroll delay={4}>
                                <p className="about-bio">
                                    I&apos;m a Computer Science student at Lovely Professional University
                                    with a deep focus on software engineering and web development.
                                    I am passionate about exploring new technologies, solving complex problems, and building scalable applications.
                                    My goal is to continuously grow as a full-stack engineer and create impactful digital solutions.
                                </p>
                                <p className="about-love">I love what I build!</p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technical Arsenal Section */}
            <TechnicalArsenal />

        </>
    );
}
