import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="container">
            <section className="contact">
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me via email at <a id="email" href="mailto:u.atoev@innopolis.university">u.atoev@innopolis.university</a> or connect with me on social media.</p>
                <div className="social-media">
                    <a id="gh-link" href="https://github.com/Urvatullo" target="_blank" rel="noopener noreferrer">
                        <img src="photos/GitHub.svg.png" alt="GitHub" />
                    </a>
                    <a id="tg-link" href="https://t.me/urvatullo_atoev" target="_blank" rel="noopener noreferrer">
                        <img src="photos/Telegram.webp" alt="Telegram" />
                    </a>
                    <a href="https://www.facebook.com/urvatullo.atoev.16?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
                        <img src="photos/fb_icon_325x325.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/urvatullo_atoev/" target="_blank" rel="noopener noreferrer">
                        <img src="photos/Instagram_logo_2022.svg.webp" alt="Instagram" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
