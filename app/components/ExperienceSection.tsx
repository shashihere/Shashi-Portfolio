"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";





const education = [
    {
        school: "Lovely Professional University",
        degree: "Bachelor of Technology",
        major: "Computer Science and Engineering | CGPA: 7",
        location: "Punjab, India",
        duration: "Aug'23 — Present",
    },
    {
        school: "DAV Sr Sec Public School, Anpara",
        degree: "Intermediate: PCM",
        major: "Percentage: 80.8%",
        location: "Uttar Pradesh, India",
        duration: "Mar'22 — Apr'23",
    },
    {
        school: "DAV Sr Sec Public School, Anpara",
        degree: "Matriculation",
        major: "Percentage: 97.17%",
        location: "Uttar Pradesh, India",
        duration: "May'20 — Apr'21",
    },
];

const tools = [
    "Java",
    "Node.js",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Express.js",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Git",
    "Linux",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Nginx",
    "Sequelize",
    "Prisma",
    "Framer Motion",
    "Three.js",
    "Tailwind CSS",
    "Figma",
];

const awards = [
    {
        title: "Leetcode",
        org: "Solved 100+ Data Structures & Algorithms problems on Leetcode.",
        year: "Active",
    },
    {
        title: "HackerRank",
        org: "Attained 5-star in C++ and 3-star in Python on HackerRank.",
        year: "Active",
    },
];


const certifications = [
    {
        title: "Cloud Computing",
        org: "IIT Certified Course",
        year: "October 2025",
        image: "/certificates/nptel-cert.jpg",
        issuedBy: "NPTEL SWAYAM",
        monthYear: "October 2025",
        skills: ["Cloud Computing"],
        link: "https://drive.google.com/file/d/1WF-PBaWHUPQFzBEXmzddIFZ0Tt80N9Ub/view?usp=drive_link"
    },
    {
        title: "Computational Theory",
        org: "Course Completion",
        year: "July 2025",
        image: "/certificates/infosys-cert.jpg",
        issuedBy: "Infosys",
        monthYear: "July 2025",
        skills: ["Computational Theory"],
        link: "https://drive.google.com/file/d/1Cd-c4Gcvbz3Ile94OgTAcc2Nv_e9LUR6/view?usp=drive_link"
    },
    {
        title: "Bits & Bytes of Computer Networking",
        org: "Course Completion",
        year: "October 2024",
        image: "/certificates/google-cert.jpg",
        issuedBy: "Google",
        monthYear: "October 2024",
        skills: ["Computer Networking"],
        link: "https://drive.google.com/file/d/1qkGe4xPPXaD3N15HgXk7BgVGG8Zc2X9I/view?usp=drive_link"
    },
    {
        title: "Introduction to Hardware & OS",
        org: "Course Completion",
        year: "October 2024",
        image: "/certificates/ibm-cert.jpg",
        issuedBy: "IBM",
        monthYear: "October 2024",
        skills: ["Hardware", "Operating Systems"],
        link: "https://drive.google.com/file/d/13zt3fUGTU0DxVpVR7CTLKpNnYOBz2gPl/view?usp=drive_link"
    },
];

const CertificateCard = ({ cert, index }: { cert: { title: string, org: string, year: string, image: string, issuedBy: string, monthYear: string, skills: string[], link: string }, index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <RevealOnScroll delay={index * 0.12}>
            <div 
                className={`cert-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="cert-card-inner">
                    <div className="cert-card-front">
                        <div className="cert-card-img">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="cert-card-content">
                            <div className="cert-card-header">
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <span className="cert-card-year">{cert.year}</span>
                            </div>
                            <p className="cert-card-org">{cert.org}</p>
                        </div>
                    </div>
                    <div className="cert-card-back">
                        <h3 className="cert-card-back-title">{cert.title}</h3>
                        <p className="cert-card-back-issued">Issued by: {cert.issuedBy}</p>
                        <p className="cert-card-back-date">{cert.monthYear}</p>
                        <div className="cert-card-back-skills">
                            {cert.skills.map((skill: string, idx: number) => (
                                <span key={idx}>{skill}</span>
                            ))}
                        </div>
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cert-card-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Optional: logic to open link if valid
                            }}
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default function ExperienceSection() {
    return (
        <>
            {/* Certificates */}
            <section className="certs-section" id="certifications">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Certificates</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Certificates.
                        </h1>
                    </RevealOnScroll>

                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <CertificateCard key={i} cert={cert} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="awards-section" id="awards">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Recognition</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Achievements.
                        </h1>
                    </RevealOnScroll>

                    <div className="awards-list">
                        {awards.map((award, i) => (
                            <RevealOnScroll key={i} delay={i * 0.12}>
                                <div className="awards-row">
                                    <span className="awards-row-year">{award.year}</span>
                                    <div className="awards-row-body">
                                        <h3 className="awards-row-title">{award.title}</h3>
                                        <p className="awards-row-desc">{award.org}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            {/* Education */}
            <section className="education-section" id="education">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Learning</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Education.
                        </h1>
                    </RevealOnScroll>

                    <div className="edu-list">
                        {education.map((edu, i) => (
                            <RevealOnScroll key={i} delay={i * 0.12}>
                                <div className="edu-row">
                                    <div className="edu-row-left">
                                        <h3 className="edu-school">{edu.school}</h3>
                                        <p className="edu-degree">{edu.degree}</p>
                                        <p className="edu-major">{edu.major}</p>
                                    </div>
                                    <div className="edu-row-right">
                                        <p className="edu-location">{edu.location}</p>
                                        <p className="edu-duration">{edu.duration}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>





            {/* <hr className="section-divider" /> */}

        </>
    );
}
