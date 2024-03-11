import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from 'react';

const Carousel = () => {

  const events = [
    {
      id: 1,
      name: 'Summer Festival',
      date: 'July 15, 2024',
      location: 'Central Park, New York City',
      description: 'Join us for a day of music, food, and fun in the heart of New York City! Our Summer Music Festival features performances by top artists from around the world, delicious food vendors.',
      imageUrl: 'https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.webp?b=1&s=170667a&w=0&k=20&c=n6kUiRyqeZ7LYCCAwhphucTgef-DfvQQOY7siH5VmYQ=',
    },
    {
      id: 2,
      name: 'Spring Series',
      date: 'April 30, 2024',
      location: 'Golden Gate Park, San Francisco',
      description: 'Celebrate the arrival of spring with our Spring Concert Series! Enjoy live performances by local bands and artists, delicious food trucks, and a vibrant atmosphere in beautiful Golden Gate Park.',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      name: 'Winter Party',
      date: 'December 20, 2024',
      location: 'Rockefeller Center, New York City',
      description: 'Get into the holiday spirit at our Winter Wonderland Party! Skate under the iconic Rockefeller Center Christmas tree, sip on hot cocoa, and enjoy festive music and entertainment.',
      imageUrl: 'https://media.istockphoto.com/id/1385170622/photo/the-guitarist-plays-on-guitar-in-a-dark-room-hands-of-a-guitar-player-playing-the-guitar-low.webp?b=1&s=170667a&w=0&k=20&c=RZiTdX54hGbxGPDc3bnLkaC3AZ62HQSrJgKuX-d0OCA=',
    },
    {
        id: 4,
        name: 'Autumn Party',
        date: 'December 20, 2024',
        location: 'Rockefeller Center, New York City',
        description: 'Get into the holiday spirit at our Winter Wonderland Party! Skate under the iconic Rockefeller Center Christmas tree, sip on hot cocoa, and enjoy festive music and entertainment.',
        imageUrl: 'https://media.istockphoto.com/id/1473679725/photo/couple-takes-selfie-at-concert.jpg?s=612x612&w=0&k=20&c=EDo6RYTPuz2Q_YSEyeiGqp1Dvq8XoN8wsjEZzBjl5xM=',
      },
  ];


  return (
    <div className="carousel-container">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        autoPlay
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={{
          0: {
            items: 2,
          },
          512: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        }}
        items={events.map((event) => (
          <div key={event.id} className="text-white text-center mb-4">
            <img src={event.imageUrl} alt={event.name} 
            style={{ width: "150px", height: "150px"}} 
            className="rounded-circle"
            />
            <h5>{event.name}</h5>
            {/* <p>{event.description}</p> */}
          </div>
        ))}
      />
     
    </div>
  );
};

export default Carousel;
