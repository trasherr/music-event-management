import jwt, { Jwt } from "jsonwebtoken";
const SECRET = process.env.SECRET || "secret";
import db from "../../data/db";
import path from "path";
import { Request, Response } from 'express';
import { IUser, IUserEntity } from "../../models/user.interface";
import fs from "fs";

//constants
export const FILE_EXTENSIONS = [ ".pdf", ".doc", ".docx",".jpg", ".jpeg", ".png", ".hief", ".bmp", ".svg" ];

export const IMAGE_EXTENSIONS = [ ".jpg", ".jpeg", ".png", ".hief", ".bmp", ".svg" ];

export const STORAGE_PATH = { 
    FILES: './public/files/',
    IMAGES: './public/files/'
}


//functions
export const VerifyUser = async (req: Request) => {

    const headers = JSON.parse(JSON.stringify(req.headers))
    const tk = jwt.verify(headers.authorization.replace("Bearer ",""),SECRET) as jwt.JwtPayload

    let user: IUser | null = null;

    if(tk) {
        const entity: IUserEntity = await db.getData("/userEntity");
        user = entity.users.filter((user: IUser) => user.id === tk.id)[0]
    }

    return { verified: tk ? true : false, token: tk, user: user }

}


export const VerifyMedia = (req: Request,file: Express.Multer.File) => {

    const extension = path.extname(file.originalname).toLowerCase();
    
    if(req.params.location == "FILES"){
        
        if(FILE_EXTENSIONS.indexOf(extension.trim()) != -1) return true;
        
    }

    return false;

}

export const createDirectory = async () => {
  try {
    fs.accessSync(STORAGE_PATH.FILES); // Check if directory exists
  } catch (err) {
      await fs.promises.mkdir(STORAGE_PATH.FILES); // Create directory
    // if (err.code === 'ENOENT') { // Directory not found
    //   console.log(`Directory '${STORAGE_PATH.FILES}' created successfully!`);
    // } else {
    //   throw err; // Re-throw other errors
    // }
  }
}