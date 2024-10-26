import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Tissot Fitness</h3>
                </div>
                <div className="footer-info">
                    <div className="footer-column">
                        <h2>Location</h2>
                        <p>123 Fitness St, Toronto, Ontario, Canada</p>
                    </div>
                    <div className="footer-column">
                        <h2>Hours</h2>
                        <p>Mon-Fri, 6am - 8pm; Sat-Sun, 8am - 6pm</p>
                    </div>
                    <div className="footer-column">
                        <h2>Contact</h2>
                        <p>(123) 456-7890 info@tissotfitness.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
