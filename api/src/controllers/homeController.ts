import { Request, Response } from 'express';
import db from "../data/db";
import { IEventEntity } from '../models/event.interface';

export const eventsGet = async (req: Request, res: Response) => {

    const entity: IEventEntity = await db.getData("/eventEntity");

    res.send(entity.events)
}

export const eventGet = async (req: Request, res: Response) => {

    const entity: IEventEntity = await db.getData("/eventEntity");
    const event = entity.events.find(event => event.id.toString() === req.params.id);

    res.send(event)
}