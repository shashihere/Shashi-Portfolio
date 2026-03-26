"use client";

import RevealOnScroll from "./RevealOnScroll";

const internships = [
    {
        role: "CodeQuest DSA Bootcamp – Basics to Brilliance",
        company: "Training",
        location: "Remote",
        duration: "Jul. 2025 \u00A0\u00A0 | \u00A0",
        link: "https://drive.google.com/file/d/1W8Drjx97iiCcxSC4q8UE8rB_B9U4dpj3/view?usp=sharing",
        points: [
            "Completed an intensive DSA bootcamp focused on mastering core Data Structures and Algorithms from basics to advanced problem-solving.",
            "Implemented key data structures and algorithms including arrays, linked lists, stacks, queues, trees, graphs, recursion, and greedy techniques.",
            "Achieved Grade O through consistent performance, improving coding efficiency and logical thinking.",
            "Gained hands-on experience solving computer science problems using optimized and efficient approaches.",
        ],
    },
];

export default function TrainingSection() {
    return (
        <section className="internships-section" id="training" style={{ padding: "120px 0" }}>
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Professional Training</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                    <h1 className="section-title">
                        Training.
                    </h1>
                </RevealOnScroll>

                <div className="internships-list">
                    {internships.map((job, i) => (
                        <RevealOnScroll key={i} delay={i * 0.12}>
                            <div className="internship-item">
                                <div className="internship-header">
                                    <div className="internship-title-group">
                                        <h3 className="internship-role">{job.role}</h3>
                                        <p className="internship-company">{job.company}</p>
                                    </div>
                                    <div className="internship-meta">
                                        <span className="internship-duration">{job.duration}</span>
                                        <span className="internship-location">{job.location}</span>
                                    </div>
                                </div>
                                <ul className="internship-points">
                                    {job.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                {job.link && (
                                    <div style={{ marginTop: "16px" }}>
                                        <a 
                                            href={job.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-card-btn"
                                        >
                                            View Certificate
                                        </a>
                                    </div>
                                )}
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
