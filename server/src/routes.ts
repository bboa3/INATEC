import { Router } from 'express';
import multer from 'multer';

import usersController from './controllers/usersController';
import classController from './controllers/classController';
import subjectsController from './controllers/subjectsController';
import commentsController from './controllers/commentsController';
import commentsResponsesController from './controllers/commentsResponsesController';

import avatarUploadConfig from './config/avatar';


const routes = Router();
const avatarUpload = multer(avatarUploadConfig);

routes.post('/inatec/get/subjects', subjectsController.index);
routes.post('/inatec/create/subjects', subjectsController.create);

routes.put('/inatec/comments', commentsController.update);
routes.post('/inatec/comments', commentsController.create);

routes.put('/inatec/comments/responses', commentsResponsesController.update);
routes.post('/inatec/comments/responses', commentsResponsesController.create);

routes.post('/inatec/login', usersController.index);
routes.put('/inatec/update', usersController.update);
routes.post('/inatec/create/user', avatarUpload.single('avatar'), usersController.create);

routes.get('/inatec/class/:id', classController.show);
routes.get('/inatec/class', classController.index);
routes.put('/inatec/class', classController.update);
routes.post('/inatec/class', classController.create);


export default routes;