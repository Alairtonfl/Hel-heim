/* eslint-disable import/no-unresolved */
import { BaseController } from '@Bases/BaseController';
import { User } from '@Entities/User';
import UserRepository from '@Repository/UserRepository';
import { Request, Response } from 'express';

export default new class UserController implements BaseController<User> {
  async findById(req: Request, res: Response) {
    try {
      const user = await UserRepository.findById(1, User);
      return res.send(user);
    } catch (e) {
      return res.send(e).status(400);
    }
  }

  findAll(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  async create(req: Request, res: Response) {
    try {
      const {
        name, email, password, avatar,
      } = req.body;
      const user = new User();
      user.avatar = avatar;
      user.email = email;
      user.password = password;
      user.name = name;
      const result = await UserRepository.create(user);
      return res.send(result);
    } catch (e) {
      return res.send(e).status(400);
    }
  }

  update(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  delete(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
}();
