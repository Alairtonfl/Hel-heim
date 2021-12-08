import { Router } from 'express';

import UserController from '@controllers/UserController';
import AuthController from '@controllers/AuthController';
import authMiddleware from 'src/Middlewares/AuthMiddleware';

const routes = Router();

routes.post('/auth', AuthController.authenticate);
routes.get('/user/:id', authMiddleware, UserController.findById);
routes.get('/users', authMiddleware, UserController.findAll);
routes.post('/user', authMiddleware, UserController.create);
routes.put('/user/:id', authMiddleware, UserController.update);
routes.delete('user/id', authMiddleware, UserController.delete);

export default routes;
