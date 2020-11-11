import { Router } from 'express';
import multer from 'multer';

import usersController from './controllers/usersController';
import classController from './controllers/classController';
import subjectsController from './controllers/subjectsController';
import commentsController from './controllers/commentsController';
import commentsResponsesController from './controllers/commentsResponsesController';
import downloadController from './controllers/downloadController';

import avatarUploadConfig from './config/avatar';
import pdfUploadConfig from './config/pdf';

const routes = Router();
const avatarUpload = multer(avatarUploadConfig);
const pdfUpload = multer(pdfUploadConfig);

routes.post('/inatec/get/subjects', subjectsController.index);
routes.get('/inatec/get/subjects/:id', subjectsController.show);
routes.post('/inatec/create/subjects', pdfUpload.single('pdf'), subjectsController.create);
routes.get('/inatec/subjects/download/:id', downloadController.index);

routes.put('/inatec/comments/like', commentsController.update);
routes.post('/inatec/comments', commentsController.create);


routes.put('/inatec/comments/responses/like', commentsResponsesController.update);
routes.post('/inatec/comments/responses', commentsResponsesController.create);

routes.post('/inatec/login', usersController.index);
routes.put('/inatec/update', usersController.update);
routes.post('/inatec/create/user', avatarUpload.single('avatar'), usersController.create);

routes.get('/inatec/class/:id', classController.show);
routes.get('/inatec/class', classController.index);
routes.put('/inatec/class', classController.update);
routes.post('/inatec/class', classController.create);


export default routes;