import { Router } from 'express';
import FindUserByIdController from '@User/Controllers/FindUserByIdController';
import FindAllUsersController from '@User/Controllers/FindAllUsersController';
import CreateUserController from '@User/Controllers/CreateUserController';
import AuthController from '@User/Controllers/AuthController';
import UpdateUserController from '@User/Controllers/UpdateUserController';
import DeleteUserController from '@User/Controllers/DeleteUserController';

const userRoutes = Router();

userRoutes.post('/auth', AuthController.handle);
userRoutes.get('/users', FindAllUsersController.handle);
userRoutes.get('/user/:id', FindUserByIdController.handle);
userRoutes.post('/user', CreateUserController.handle);
userRoutes.put('/user/:id', UpdateUserController.handle);
userRoutes.delete('/user/:id', DeleteUserController.handle);

export default userRoutes;
