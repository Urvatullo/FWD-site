import React from 'react';
import './Bio.css';

const Bio: React.FC = () => {
    return (
        <div className="container">
            <section className="header">
                <img src="photos/Urvatullo.jpg" alt="Urvatullo Atoev" />
                <h1>Urvatullo Atoev</h1>
                <p>Front-end developer and Sport Programmer</p>
            </section>
            <section className="main">
                <h2>About Me</h2>
                <p>Hello! My name is Urvatullo Atoev. I am a student in Innopolis University. I am a front-end developer with a bit of experience when I was a 9-year student.</p>
            </section>
        </div>
    );
};

export default Bio;
