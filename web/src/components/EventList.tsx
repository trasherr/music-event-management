import React, { useState } from 'react';
import Carousel from '../pages/Carousel.tsx';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const events = [
  {
    id: '1',
    title: 'Summer Music Festival',
    eventTime: '2024-07-15',
    numberOfTickets: 500,
    images: [
      'https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.webp?b=1&s=170667a&w=0&k=20&c=n6kUiRyqeZ7LYCCAwhphucTgef-DfvQQOY7siH5VmYQ=',
      'https://media.istockphoto.com/id/1473679725/photo/couple-takes-selfie-at-concert.jpg?s=612x612&w=0&k=20&c=EDo6RYTPuz2Q_YSEyeiGqp1Dvq8XoN8wsjEZzBjl5xM='
    ],
    pricePerTicket: 25,
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
    description: 'Join us for a day of live music, food, and fun in the sun!',
  },
  {
    id: '2',
    title: 'Rock Concert Night',
    eventTime: '2024-08-20',
    numberOfTickets: 300,
    images: [
      'https://media.istockphoto.com/id/1385170622/photo/the-guitarist-plays-on-guitar-in-a-dark-room-hands-of-a-guitar-player-playing-the-guitar-low.webp?b=1&s=170667a&w=0&k=20&c=RZiTdX54hGbxGPDc3bnLkaC3AZ62HQSrJgKuX-d0OCA=',
      'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    pricePerTicket: 30,
    address: '456 Broadway',
    city: 'Los Angeles',
    country: 'USA',
    description: 'Experience the energy of live rock music with your favorite bands!',
  },
];

const EventCard = ({ event }) => (
  
  <div className="col-lg-3 col-sm-6">
    <div className="card border-0 p-3 shadow border-top border-5 rounded">
      
    <div className="carousel-container">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          autoPlay
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={event.images.map((image, index) => (
            <div key={index} className="text-center mb-4">
              <img src={image} alt={`Event Image ${index + 1}`} style={{ width: "220px", height: "220px" }} />
            </div>
          ))}
        />
      </div>
      <div className="card-body pb-0">
        <div className="pl-1">
          <p className="card-title h5 text-dark opacity-75 text-uppercase text-center">
            {event.title}
          </p>
        </div>
        <div className="pl-1">
          <p className="text-dark text-opacity-75 text-center">
            <span>&#8377;{(event.pricePerTicket)}</span>
          </p>
        </div>
        <div className="pl-1">
          <p className="text-dark text-opacity-75 text-center">
            Event Time: {(event.eventTime)}
          </p>
        </div>
        <Link to={`/details/${event.id}`} className="btn btn-dark bg-gradient border-0 form-control">Details</Link>

        {/* <div className="pl-1">
          <p className="text-dark text-opacity-75 text-center">
            Address: {event.address}, {event.city}, {event.country}
          </p>
        </div>
        <div className="pl-1">
          <p className="text-dark text-opacity-75 text-center">
            Description: {event.description}
          </p>
        </div> */}
      </div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="container mt-5">
    <div className="row">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  </div>
);

export default EventsPage;
