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

import avatarUploadConfig from './config/avatar';
import pdfUploadConfig from './config/pdf';

const routes = Router();  
const avatarUpload = multer(avatarUploadConfig);
const pdfUpload = multer(pdfUploadConfig);

routes.post('/login/student', studentsController.index);
routes.post('/create/student', studentsValidator, studentsController.create);

routes.post('/login/teacher', teachersController.index);
routes.post('/create/teacher', teachersValidator, teachersController.create);

routes.get('/classes/:id', classesController.index);
routes.get('/classes', classesController.indexAll);
routes.post('/create/class', classValidator, classesController.create);

routes.post('/create/class/lessons', lessonsValidator, lessonsController.create);

export default routes;