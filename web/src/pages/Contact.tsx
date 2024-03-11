import React from 'react';
import ContactUs from './ContactUs.tsx';

const ContactPage: React.FC = () => {
    return (
        
        <div className="container mt-5">
            
            <h1>Contact Us</h1>
                <div className="col-lg-12">
                    <p>Thank you for considering ConcertCrafter for your music event needs! We're excited to hear from you and assist with your upcoming event. Whether you have questions, want to discuss potential collaborations, or are ready to start planning, we're here to help. Get in touch with us using the information below:</p>
                    <h2>Contact Information:</h2>
                    <ul className="list-unstyled">
                        <li>
                            <strong>Phone:</strong> +1234567890
                        </li>
                        <li>
                            <strong>Email:</strong> info.in@nagarro.com
                        </li>
                        <li>
                            <strong>Address:</strong> 13, Subedar Major Laxmi Chand Road, Udyog Vihar, Sector 18
Gurugram 122015, Haryana
India
                        </li>
                    </ul>
                    <h2>Business Hours:</h2>
                    <ul className="list-unstyled">
                    <li>Monday-Friday: 9:00 AM - 7:00 PM</li>
                        <li>Saturday-Sunday: Closed</li>
                    </ul>
                </div>
            <h2>Get in Touch</h2>
            <ContactUs />

            <footer className="mt-5 text-center">
                <p>Connect with us:</p>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="me-3">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li className="me-3">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li className="me-3">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li className="me-3">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                </ul>
            </footer>

        </div>
    );
};

export default ContactPage;
