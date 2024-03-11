import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import { IEvent } from '../components/EventList';
import axios from 'axios';
import { API_ENDPOINT, API_ENDPOINT_STRIP } from '../utils/constants.tsx';
import { apiRoutes } from '../utils/routes.tsx';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AliceCarousel from 'react-alice-carousel';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event,setEvent] = useState<IEvent>({} as IEvent);

  useEffect(() => {
    if(eventId === undefined) {
      return;
    }
    axios.get<IEvent>(API_ENDPOINT + apiRoutes.eventGet(eventId)).then((response) => {
      console.log(response.data);
      setEvent(response.data);
      
    })
    .catch((error) => {
        console.log(error);
    });
  }, []);
  
  const buyTicket = () => {
    const tickets = (event?.tickets ? event?.tickets : 1) - 1;
    setEvent({ ...event,tickets });

    if (event.tickets > 0) {
    toast.success('Ticket bought successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
    
    setTimeout(() => navigate('/'), 3000 ) ; 
  } else {
    toast.error('No tickets available', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }


  };

  if (!event.id) {
    return <div>Event not found!</div>;
  }

  return (
    
    <div className="container mt-5">
      <ToastContainer />
      <div className="card shadow border-0 mt-4 mb-4">
        <div className="card-header bg-secondary  py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="text-white text-uppercase">{event.title}</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
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
                <AliceCarousel
                  mouseTracking
                  infinite
                  autoPlay
                  autoPlayInterval={1000}
                  animationDuration={1500}
                  disableDotsControls
                  disableButtonsControls
               items={event.images.map((image:string, index:number) => (
            <div key={index} className="text-center mb-4">
              <img src={API_ENDPOINT_STRIP+'/files/'+image} alt={`Event Image ${index + 1}`} style={{ width: "220px", height: "220px", cursor:"none", borderRadius: "10px" }} />
            </div>
          ))}
        />
                  {/* <img src={event.images[0]} alt="Event Image" className="card-img-top rounded" style={{height: '280px', width: '250px'}} /> */}
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="my-3">
                  <p>Description: {event.description}</p>
                  <p>Location: {event.location.address} {event.location.city} {event.location.country} </p>
                  <p>Event Time: {new Date(event.datetime).toLocaleString()}</p>
                  <p>Number of Tickets: {event.tickets}</p>
                </div>
                <div className="text-center my-3">
                   <button 
                     className="btn btn-primary"
                     onClick={buyTicket}
                    disabled={event.tickets <= 0}
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
