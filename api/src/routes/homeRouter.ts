import express  from "express";
import { eventGet, eventsGet } from "../controllers/homeController";
const homeRouter = express.Router();


homeRouter.get("/events",eventsGet);
homeRouter.get("/event/:id",eventGet);

export default homeRouter;
