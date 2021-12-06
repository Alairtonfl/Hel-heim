import { Router } from "express";

import  UserController  from "@controllers/UserController";

const routes = Router();

routes.get('/user/:id', UserController.findById)
routes.get('/users', UserController.teste)

export default routes;