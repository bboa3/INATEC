import { Router } from 'express';

import usersController from './controllers/usersController';


const routes = Router();

routes.post('/inatec/create/user', usersController.create);
routes.post('/inatec/login', usersController.index);
routes.put('/inatec/update', usersController.update);

export default routes;