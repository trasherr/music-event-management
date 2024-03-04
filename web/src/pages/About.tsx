import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    // const pageStyles = {
    //     backgroundColor: '#121212', 
    //     // backgroundColor: 'black', 

    //     color: 'white', 
    //     padding: '20px', 
    // };
    return (
        // <div style={pageStyles}>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
   
                    <div className="col-lg-12">
                        <div className="pr-4">
                            <h1 className="border-b-4 border-danger w-52">About Us</h1>
                            <p>Welcome to ConcertCrafter, your premier destination for music event management services! At ConcertCrafter, we are passionate about curating unforgettable musical experiences that leave a lasting impression on our clients and attendees alike.</p>
                            <p>With a dedicated team of experienced professionals and a deep understanding of the music industry, we specialize in bringing visions to life and creating seamless events that exceed expectations. From intimate gatherings to large-scale festivals, we have the expertise and resources to handle every aspect of event planning and execution.</p>
                            <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                            <ul className="list-disc list-inside mt-4">
                                <li>Experience: With years of experience in the music event industry, we have the knowledge and expertise to bring your vision to life.</li>
                                <li>Creativity: We thrive on creativity and innovation, constantly pushing boundaries to create unique and memorable experiences.</li>
                                <li>Personalized Service: We take the time to understand your needs and preferences, delivering customized solutions tailored to your specific requirements.</li>
                                <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth and successful event every time.</li>
                            </ul>
                            <p className="py-6">At ConcertCrafter, we are dedicated to exceeding expectations and creating moments that inspire and entertain. Contact us today to start planning your next unforgettable music event!</p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default AboutPage;
