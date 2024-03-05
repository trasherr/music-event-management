import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { API_ENDPOINT_STRIP } from '../utils/constants.tsx';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  datetime: Date;
  tickets: number;
  price: number;
  location: {
    address: string ;
    city: string ;
    country: string ;
  };
  images: string[]
}

const EventCard = ({ event }: { event: IEvent }) => (
  
  <div className="col-lg-4 pb-1">
    <div className="card border-0 p-3 shadow border-top border-5 rounded">
      
    <div className="carousel-container">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={event.images.map((image:string, index:number) => (
            <div key={index} className="text-center mb-4">
              <img src={API_ENDPOINT_STRIP+'/files/'+image} alt={`Event Image ${index + 1}`} style={{ maxWidth: "95%", maxHeight: "220px", cursor:"none",borderRadius: "10px" }} />
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
        <div className="pl-0">
          <p className="text-dark text-opacity-75 text-center">
            <span>&#8377;{(event.price)}</span>
          </p>
        </div>
        <div className="pl-0">
          <p className="text-dark text-opacity-75 text-center">
            Event Time:{ new Date(event.datetime)?.toLocaleTimeString()}
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

const EventsPage = (props: { events: IEvent[] }) => (
  <div className="container mt-5">
    <div className="row">
      {props.events.map((event: IEvent, index: number) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  </div>
);

export default EventsPage;