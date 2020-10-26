import { Router } from 'express';
import multer from 'multer';

import usersController from './controllers/usersController';
import classController from './controllers/classController';

import avatarUploadConfig from './config/avatar';


const routes = Router();
const avatarUpload = multer(avatarUploadConfig);

routes.post('/inatec/login', usersController.index);
routes.put('/inatec/update', usersController.update);
routes.post('/inatec/create/user', avatarUpload.single('avatar'), usersController.create);

routes.get('/inatec/class/:id', classController.show);
routes.get('/inatec/class', classController.index);
routes.post('/inatec/class', classController.create);

export default routes;