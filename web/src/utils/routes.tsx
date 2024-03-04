export const reactRoutes = {
    home: '/',
    about: '/about',
    contact: '/contact',
    services: '/services',
    events: '/events',
    event: '/event',
    adminEvents: '/admin/event',
    admin: '/admin',
    auth: '/auth'
}

export const apiRoutes = {
    login: '/auth/login',
    eventGet: (eventId: number | string) => '/home/event/'+eventId,
    eventsGet: '/home/events',
    eventPost: '/admin/event',
    eventImgPost: (eventId: number | string) => '/admin/event/images/FILES/'+eventId,
    eventDelete: '/admin/event',
    eventPut: '/admin/event',
}