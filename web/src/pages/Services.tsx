import React from 'react';

const ServicesPage: React.FC = () => {
    const services = [
        {
            id: 1,
            name: 'Event Planning',
            description: 'From concept development to execution, our experienced event planners handle every aspect of event management with precision and attention to detail.',
            imageUrl: 'https://i.ibb.co/MhQQzBF/pexels-dziana-hasanbekava-7063765.jpg', // Replace with real image URLs
        },
        {
            id: 2,
            name: 'Artist Management',
            description: 'Our artist management services connect talented musicians and performers with opportunities, providing personalized representation and support.',
            imageUrl: 'https://i.ibb.co/rtnLpb4/event-management.jpg', // Replace with real image URLs
        },
        {
            id: 3,
            name: 'Venue Coordination',
            description: 'Securing top-notch locations and managing all logistics, our team specializes in venue coordination, ensuring a seamless event experience.',
            imageUrl: 'https://i.ibb.co/bBh9fTw/venue.jpg', // Replace with real image URLs
        },
        {
            id: 4,
            name: 'Marketing and Promotion',
            description: 'Developing customized strategies to promote events, increase visibility, and drive ticket sales through various marketing channels.',
            imageUrl: 'https://i.ibb.co/30HJMzP/pexels-oladimeji-ajegbile-3314294.jpg', // Replace with real image URLs
        },
        {
            id: 5,
            name: 'Production Management',
            description: 'Covering everything from stage design to audiovisual production, delivering high-quality production solutions for an enhanced event experience.',
            imageUrl: 'https://i.ibb.co/37cjYyh/pexels-canva-studio-3194524.jpg', // Replace with real image URLs
        },
        {
            id: 6,
            name: 'On-Site Support',
            description: 'Providing on-site support to ensure everything runs smoothly, managing logistics and resolving any last-minute issues.',
            imageUrl: 'https://images.pexels.com/photos/5686476/pexels-photo-5686476.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with real image URLs
        }
    ];
    

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Our Services</h1>
            <div className="row">
                {services.map(service => (
                    <div key={service.id} className="col-lg-4 col-sm-6 mb-3">
                        <div className="card h-100 border-0 shadow">
                            <img src={service.imageUrl} alt="Service" className="card-img-top" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
