import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'express-async-errors';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';
import routes from './routes';

import errorHandler from './validations/handler/handler';

dotenvExpand(config());

const app = express();

app.use(cors());

app.set('trust proxy', 1);
app.use(helmet());
app.use(express.json()); 

app.use('/api/v1', routes);

app.use('/uploads/images', express.static(path.join(__dirname, '..', 'uploads', 'images')));
app.use('/uploads/pdfs', express.static(path.join(__dirname, '..', 'uploads', 'pdfs')));

app.use(errorHandler);

app.listen(process.env.HTTP_PORT || 3002);