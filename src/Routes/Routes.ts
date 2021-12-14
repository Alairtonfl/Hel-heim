import { Router } from 'express';

import UserController from '@controllers/UserController';
import AuthController from '@User/Controllers/AuthController';
import authMiddleware from '../Middlewares/AuthMiddleware';

const routes = Router();

routes.post('/auth', AuthController.handle);
routes.get('/user/:id', UserController.findById);
routes.get('/users', UserController.findAll);
routes.post('/user', UserController.create);
routes.put('/user/:id', authMiddleware, UserController.update);
routes.delete('user/id', authMiddleware, UserController.delete);

export default routes;
