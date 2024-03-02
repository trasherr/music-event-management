import express  from "express";
import multer from "multer";
import { STORAGE_PATH, VerifyMedia, VerifyUser } from "./upload/verifyUpload";
import path from "path";
import { eventImgPost, eventPost } from "../controllers/adminController";

const userFileStorage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        req.body.storagePath = STORAGE_PATH[req.params.location]
        cb(null, STORAGE_PATH[req.params.location])
    },
    filename: async function (req, file, cb) {

        
        const extension = path.extname(file.originalname).toLowerCase();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      
        let verifyUser = await VerifyUser(req);
        let verifyMedia = VerifyMedia(req,file);
        
        if(!verifyUser || !verifyMedia){
            return cb(null,"")
        }

        const imgName = req.params.location + uniqueSuffix
        
        if(req.body.images?.length > 0){
            req.body.images.push(imgName + extension);

        }
        else{
            req.body.images = []
            req.body.images.push(imgName + extension);
        }
       
        cb(null, imgName + extension)
    

    }
})

const userFileUploadMulter = multer({
    storage: userFileStorage,
    fileFilter: async function(req,file,cb) {

        let verifyUser = await VerifyUser(req);
        let verifyMedia = VerifyMedia(req,file);
        console.log("filter: ",verifyMedia);

        if(!verifyUser){
            cb(null,false)
        }
        else if (verifyMedia){
            cb(null,true);
        }
        else
            cb(null,false)
    }
})


const adminRouter = express.Router();


adminRouter.post('/event',eventPost);
adminRouter.post('/event/images/:location/:eventId',userFileUploadMulter.array('files'), eventImgPost);


export default adminRouter;
