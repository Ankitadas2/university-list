import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        
        <div>
            {/* All footer informations */}
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                    <h4>University</h4>
                    <ul>
                        <li><Link to="/about">About us </Link></li>
                         <li><Link to="/home">Privacy</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/service">Courses</Link></li>
                       
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Details</h4>
                    <ul>
                        <li><Link to="/about">Payment </Link></li>
                        <li><Link to="/about">Teacher</Link></li>
                        <li><Link to="/about">Faq </Link></li>
                        <li><Link to="/about">Guidlines </Link> </li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Destination</h4>
                   
                    </div>
                    <div className="footer-col">
                    <h4>Follow us</h4>
                    {/* All social links part */}
                    <div className="social-links">
                    
                        <Link to="/about"><i class="bi bi-facebook fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                       <Link to="/about"><i class="bi bi-instagram fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                        <Link to="/about"><i class="bi bi-twitter fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                       <Link to="/about"><i class="bi bi-linkedin fs-2 text-warning rounded bg-light me-4 mt-4"></i></Link>
                   
                    </div>
                    </div>
                    </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;