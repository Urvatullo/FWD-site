import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="container">
            <section className="main">
                <h2>My Portfolio</h2>
                <p>Here is my portfolio</p>
                <h2>Skills and Expertise</h2>
                <div className="skills">
                    <ul>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <h2>Achievements and Awards</h2>
                <div className="achievements">
                    <ul>
                        <li>Second place in Dushanbe city Olympiad in Informatics in 2023</li>
                        <li>Participant in Kangaroo math Olympiad</li>
                        <li>Participant in Archimedes Math Competition</li>
                    </ul>
                </div>
                <h2>Projects</h2>
                <div className="skills">
                    <ul>
                        <li>A web development project using HTML, CSS, and JavaScript.</li>
                        <li>A C++ game called rock scissors paper.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Projects;
