import { Request, Response } from 'express';
import CreateUserService from '../Services/CreateUserService';

export default new class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body;
    const result = CreateUserService.execute({
      name, email, password, avatar,
    });

    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
