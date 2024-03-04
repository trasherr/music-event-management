import React, { useState, useEffect } from 'react';
import Banner from './Banner.tsx';
import EventList, { IEvent } from '../components/EventList.tsx';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants.tsx';
import { apiRoutes } from '../utils/routes.tsx';

const HomePage: React.FC = () => {

    const [events, setEvents] = useState<IEvent[]>([]);


    useEffect(() => {
        axios.get<IEvent[]>(API_ENDPOINT + apiRoutes.eventsGet).then((response) => {
            setEvents(response.data);
            console.log(response.data);
            
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (

        <>
        <Banner/>
        <EventList events={events}/>
        </>
    );
};

export default HomePage;
