import { Router } from 'express';

import usersController from './controllers/usersController';
import classController from './controllers/classController';


const routes = Router();

routes.post('/inatec/create/user', usersController.create);
routes.post('/inatec/login', usersController.index);
routes.put('/inatec/update', usersController.update);

routes.get('/inatec/class/:id', classController.index);
routes.post('/inatec/class', classController.create);

export default routes;