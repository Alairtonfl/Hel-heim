import { Router } from 'express';
import FindUserByIdController from '@User/Controllers/FindUserByIdController';
import CreateUserController from '../Controllers/CreateUserController';

const userRoutes = Router();

userRoutes.post('/user', CreateUserController.handle);
userRoutes.get('/user/:id', FindUserByIdController.handle);

export default userRoutes;
