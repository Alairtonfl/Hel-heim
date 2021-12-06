import { BaseController } from "@Bases/BaseController";
import { User } from "@Entities/User";
import UserRepository from "@Repository/UserRepository";
import { Request, Response } from "express";

export default new class UserController implements BaseController<User>{
    async findById(req: Request, res: Response) {
        const user = await UserRepository.loadById(1, User);
        return res.send(user)
    }

    async teste(req: Request, res: Response){
        res.send('SAFE')
    }
}