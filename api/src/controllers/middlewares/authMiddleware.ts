import express from 'express';
import jwt from "jsonwebtoken";
// import querystring from 'querystring';
const SECRET = process.env.SECRET || "secret";

const app = express()

const authMiddleware = app.use((req, res, next) => {
  try{
    const headers = JSON.parse(JSON.stringify(req.headers))
    console.log(headers.authorization);
    const tk = jwt.verify(headers.authorization.replace("Bearer ",""),SECRET) as jwt.JwtPayload
    
    req.body.identity = tk.id
    next()
    return;
  }
  catch(e){
    console.log(e);
    
    res.status(419)
    res.send({message: "Authentication Failed"})
  }
  
})

export default authMiddleware;