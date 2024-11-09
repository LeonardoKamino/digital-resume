import React from 'react';
import '../Style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Leo Kamino. All rights reserved.</p>  

                <button className="scroll-to-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <FontAwesomeIcon icon="chevron-up" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;