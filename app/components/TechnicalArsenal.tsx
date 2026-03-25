"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import restApiIcon from "../assets/icons/rest-api-icon.svg";

type Category = "All" | "Languages" | "Web Technologies" | "Databases" | "Core CS";

interface Skill {
    name: string;
    category: Exclude<Category, "All">;
    icon?: string;
    bgColor?: string;
}

const skills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "C++", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", category: "Languages", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "C", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "PHP", category: "Languages", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },

    // Web Technologies
    { name: "HTML5", category: "Web Technologies", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", category: "Web Technologies", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "React.js", category: "Web Technologies", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", category: "Web Technologies", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", category: "Web Technologies", icon: "https://cdn.simpleicons.org/express/eeeeee" },
    { name: "TypeScript", category: "Web Technologies", icon: "https://cdn.simpleicons.org/typescript/3178C6" },

    // Databases
    { name: "MySQL", category: "Databases", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", category: "Databases", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", category: "Databases", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },

    // Core CS
    { name: "Operating Systems", category: "Core CS", bgColor: "#E34F26" },
    { name: "Computer Networks", category: "Core CS", bgColor: "#4479A1" },
    { name: "Data Structures and Algorithms", category: "Core CS", bgColor: "#47A248" },
    { name: "Object-Oriented Programming", category: "Core CS", bgColor: "#777BB4" },
];

const categories: Category[] = [
    "All",
    "Languages",
    "Web Technologies",
    "Databases",
    "Core CS",
];

/* Simple abbreviation for the avatar circle inside each card */
function getInitials(name: string) {
    return name.slice(0, 2).toUpperCase();
}

export default function TechnicalArsenal() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All" ? skills : skills.filter((s) => s.category === active);

    return (
        <section className="arsenal-section" id="technical-arsenal">
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Skills</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                    <h1 className="section-title">
                        Technical <em>Skills</em>
                    </h1>
                </RevealOnScroll>

                {/* ── Filter bar ── */}
                <RevealOnScroll delay={0.25}>
                    <div className="arsenal-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`arsenal-filter-btn${active === cat ? " active" : ""}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* ── Skill grid ── */}
                <div className="arsenal-grid" key={active}>
                    {filtered.map((skill, i) => (
                        <RevealOnScroll key={skill.name} delay={i * 0.04}>
                            <div className="arsenal-card">
                                <div
                                    className="arsenal-card-icon"
                                    style={{
                                        overflow: "hidden",
                                        background: skill.icon ? "transparent" : (skill.bgColor || ""),
                                        color: skill.icon ? "transparent" : (skill.bgColor ? "#fff" : "")
                                    }}
                                >
                                    {skill.icon ? (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width="40"
                                            height="40"
                                            style={{ objectFit: "contain" }}
                                        />
                                    ) : (
                                        getInitials(skill.name)
                                    )}
                                </div>
                                <span className="arsenal-card-name">{skill.name}</span>
                                <span className="arsenal-card-cat">{skill.category}</span>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
