import React from 'react';
import Banner from './Banner.tsx';
import EventList from '../components/EventList.tsx';

const HomePage: React.FC = () => {
    return (

        <>
        <Banner/>
        <EventList/>
        </>
    );
};

export default HomePage;
