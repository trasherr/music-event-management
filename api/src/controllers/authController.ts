import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Request, Response } from 'express';
import db from "../data/db";
import { IUser, IUserEntity } from "../models/user.interface";
const SECRET = process.env.SECRET || "secret";

export const login = async (req: Request,res: Response) => {
    console.log(req.body);
    
    const entity: IUserEntity = await db.getData("/userEntity");
    const user = entity.users.filter((item: IUser) => item.email == req.body.email && item.password == req.body.password)
    console.log(user);
    console.log(entity);
    
    if(user.length === 0){

        res.status(401).send(null);
        return ;
    }
    const token = jwt.sign(
        {
            id:user[0].id,
            email: user[0].email,
        },
        SECRET,
        {
            expiresIn: "24h"
        }
    )

    res.send({token: token})
    
}

export const register = async (req: Request,res: Response) => {
    console.log(req.body);
    
    let entity: IUserEntity = await db.getData("/userEntity");
    const user: IUser = {
        id: entity.key + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        
    };
    entity.key = entity.key + 1;
    entity.users.push(user);

    await db.push("/userEntity",entity);

    res.send(null);
    
}