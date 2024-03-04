import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center ">
   
                    <div className="col-lg-8 border border-info me-1 rounded mt-0">
                    <div className='bg-info pt-1 ps-0 pe-0 ms-0 me-0 rounded-bottom'></div>

                        <div className="pr-4">
                            <h1 className="border-b-4 border-danger w-52">Events</h1>
                            <div className='row'>
                                <div className='col-lg-5'>  <img  className='float-start img-fluid rounded'  src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_640.jpg" alt=""  />  </div>
                                <div className='col-lg-7'>
                                    <p>Welcome to MEM, your premier destination for music event management services! At MEM, we are passionate about curating unforgettable .</p>
                                    <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                                    <ul className="list-disc list-inside mt-4">
                                        <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth .</li>
                                    </ul>
                                    </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-5'>  <img  className='float-start img-fluid rounded'  src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_640.jpg" alt=""  />  </div>
                                <div className='col-lg-7'>
                                    <p>Welcome to MEM, your premier destination for music event management services! At MEM, we are passionate about curating unforgettable .</p>
                                    <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                                    <ul className="list-disc list-inside mt-4">
                                        <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth .</li>
                                    </ul>
                                    </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-5'>  <img  className='float-start img-fluid rounded'  src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_640.jpg" alt=""  />  </div>
                                <div className='col-lg-7'>
                                    <p>Welcome to MEM, your premier destination for music event management services! At MEM, we are passionate about curating unforgettable .</p>
                                    <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                                    <ul className="list-disc list-inside mt-4">
                                        <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth .</li>
                                    </ul>
                                    {/* <p className="py-6">At MEM, we are dedicated to exceeding expectations and creating moments that ins!</p> */}
                                    </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-5'>  <img  className='float-start img-fluid rounded'  src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_640.jpg" alt=""  />  </div>
                                <div className='col-lg-7'>
                                    <p>Welcome to MEM, your premier destination for music event management services! At MEM, we are passionate about curating unforgettable .</p>
                                    <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                                    <ul className="list-disc list-inside mt-4">
                                        <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth .</li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3   ms-1 rounded mt-0 border border-info border-start-3 ">
                        <div className='bg-info pt-1 ps-0 pe-0 ms-0 me-0 rounded-bottom'></div>
                        <div className="pr-4">
                            <h1 className="border-b-4 border-danger w-52    ">About Us</h1>
                            <h4 className="mt-6 border-b-4 border-danger w-52">Why Choose Us?</h4>
                            <ul className="list-disc list-inside mt-4">
                                <li>Experience: With years of experience in the music event industry, we have the knowledge and expertise to bring your vision to life.</li>
                                <li>Creativity: We thrive on creativity and innovation, constantly pushing boundaries to create unique and memorable experiences.</li>
                                <li>Personalized Service: We take the time to understand your needs and preferences, delivering customized solutions tailored to your specific requirements.</li>
                                <li>Professionalism: Our team is committed to professionalism and excellence in everything we do, ensuring a smooth and successful event every time.</li>
                            </ul>
                            <p className="py-6">At MEM, we are dedicated to exceeding expectations and creating moments that inspire and entertain. Contact us today to start planning your next unforgettable music event!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

