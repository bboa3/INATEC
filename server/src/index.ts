import express from 'express';
import http from 'http';
import socket from 'socket.io';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';

dotenvExpand(config());

const app = express();
const server = http.createServer(app)
const io = socket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads/images', express.static(path.join(__dirname, '..', 'uploads', 'images')));
app.use('/uploads/pdf', express.static(path.join(__dirname, '..', 'uploads', 'pdf')));
app.use(errorHandler);

io.on('connection', socket => {
  console.log(`socket conectado: ${socket.id}`);

  socket.on('newSubject', data => {
    console.log(data);
  });

  socket.broadcast.emit('getSubjects', {subject: 'Subjects booom'});
})

server.listen(process.env.PORT || 3002);