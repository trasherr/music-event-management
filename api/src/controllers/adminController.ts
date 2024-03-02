import { Request, Response } from 'express';
import db from '../data/db';
import { IEvent, IEventEntity } from '../models/event.interface';

export const eventPost = async (req:Request, res: Response) => {

    let entity: IEventEntity = await db.getData("/eventEntity");

    const event: IEvent = {
        id: entity.key + 1,
        title: req.body.title,
        description: req.body.description,
        datetime: new Date(req.body.datetime),
        tickets: req.body.tickets,
        price: req.body.price,
        location: {
            address: req.body.location.address,
            city: req.body.location.city,
            country: req.body.location.country
        },
        images: []
    }
    console.log(event);
    
    entity.key = entity.key + 1;
    entity.events.push(event);
    await db.push("/eventEntity",entity);

    res.send(event);

}


export const eventImgPost = async (req:Request, res: Response) => {

    let entity: IEventEntity = await db.getData("/eventEntity");
    
    entity.events.forEach(event => {
        if(event.id == req.params.eventId as unknown as number){
            event.images.push(...req.body.images);
        }
    });
    await db.push("/eventEntity",entity);

    res.send(req.body.images);

}