import { Router } from 'express';
import multer from 'multer';

import studentsController from './controllers/students/studentsController';
import studentsValidator from './controllers/students/studentValidator';

import teachersController from './controllers/teachers/teachersController';
import teachersValidator from './controllers/teachers/teachersValidator';

import classesController from './controllers/classes/classesController';
import classValidator from './controllers/classes/classesValidator';

import lessonsController from './controllers/classes/lessonsController';
import lessonsValidator from './controllers/classes/lessonsValidator';

import commentsController from './controllers/chats/commentsController';

import downloadChatFiles from './controllers/chats/downloads';
import chatsController from './controllers/chats/chatsController';
import chatsValidator from './controllers/chats/chatsValidator';

import avatarUploadConfig from './config/avatar';
import pdfUploadConfig from './config/pdf';

const routes = Router();  
const avatarUpload = multer(avatarUploadConfig);
const pdfUpload = multer(pdfUploadConfig);

routes.post('/login/student', studentsController.index);
routes.post('/create/student', studentsValidator, studentsController.create);

routes.post('/login/teacher', teachersController.index);
routes.post('/create/teacher', teachersValidator, teachersController.create);

routes.post('/crete/comment', commentsController.create);
routes.post('/update/comment', commentsController.update);

routes.get('/chats/:take', chatsController.index);
routes.get('/chats/download/:id', downloadChatFiles.index);
routes.post('/create/chat', pdfUpload.single('pdf'), chatsValidator, chatsController.create);

routes.get('/classes/:id', classesController.index);
routes.get('/classes', classesController.indexAll);
routes.post('/create/class', classValidator, classesController.create);

routes.post('/create/class/lessons', lessonsValidator, lessonsController.create);

export default routes;