import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const events = [
    {
      id: '1',
      title: 'Summer Festival',
      eventTime: 'July 15, 2024',
      location: 'Central Park, New York City',
      description: 'Join us for a day of music, food, and fun in the heart of New York City! Our Summer Music Festival features performances by top artists from around the world, delicious food vendors.',
      imageUrl: 'https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.webp?b=1&s=170667a&w=0&k=20&c=n6kUiRyqeZ7LYCCAwhphucTgef-DfvQQOY7siH5VmYQ=',
      numberOfTickets: 50
    },
    {
      id: '2',
      title: 'Spring Series',
      eventTime: 'April 30, 2024',
      location: 'Golden Gate Park, San Francisco',
      description: 'Celebrate the arrival of spring with our Spring Concert Series! Enjoy live performances by local bands and artists, delicious food trucks, and a vibrant atmosphere in beautiful Golden Gate Park.',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
      numberOfTickets: 10
    },
  ];

  const event = events.find(event => event.id === eventId);
  const buyTicket = () => {
    const updatedEvents = events.map(e => {
      if (e.id === eventId && e.numberOfTickets > 0) {
        return { ...e, numberOfTickets: e.numberOfTickets - 1 };
      }
      return e;
    });

    toastr.success('Ticket bought successfully', 'Success');

    navigate('/'); 
  };

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow border-0 mt-4 mb-4">
        <div className="card-header bg-secondary bg-gradient text-light py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="text-white text-uppercase">{event.title}</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="py-3">
            <div className="row">
              <div className="col-6">
                <Link to="/" className="btn btn-outline-primary bg-gradient mb-5 fw-semibold btn-sm text-uppercase">
                  <small>Back to home</small>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 text-center mb-3">
                <div className="image-container">
                  <img src={event.imageUrl} alt="Event Image" className="card-img-top rounded" style={{height: '280px', width: '250px'}} />
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="my-3">
                  <p>Event Time: {event.eventTime}</p>
                  <p>Location: {event.location}</p>
                  <p>Number of Tickets: {event.numberOfTickets}</p>
                  <p>Description: {event.description}</p>
                </div>
                <div className="text-center my-3">
                   <button 
                     className="btn btn-primary"
                     onClick={buyTicket}
                    disabled={event.numberOfTickets <= 0}
                    >
                   Buy Ticket
        </button>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
