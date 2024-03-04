import express from 'express';
import authMiddleware from './controllers/middlewares/authMiddleware';
import adminRouter from './routes/adminRoutes';
import homeRouter from './routes/homeRouter';
import authRouter from './routes/authRouter';
import db from "./data/db";
import bodyParser from 'body-parser';
import cors from 'cors';
import { createDirectory } from './routes/upload/verifyUpload';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/files', express.static('files'));

createDirectory()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/home',homeRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/admin', authMiddleware,adminRouter);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});