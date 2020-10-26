import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

app.use('/uploads/images', express.static(path.join(__dirname, '..', 'uploads', 'images')));
app.use('/uploads/pdf', express.static(path.join(__dirname, '..', 'uploads', 'pdf')));

app.listen(3002);