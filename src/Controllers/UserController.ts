import { BaseController } from '@Bases/BaseController';
import User from '@Entities/User';
import UserRepository from '@Repository/UserRepository';
import UserStatsRepository from '@Repository/UserStatsRepository';
import { Request, Response } from 'express';

export default new class UserController implements BaseController<User> {
  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserRepository.findById(+id);
      return res.send(user);
    } catch (e) {
      return res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await UserRepository.findAll();
      return res.send(users);
    } catch (e) {
      return res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, password, avatar } = req.body;
      const user = new User();
      Object.assign(user, {
        name, email, password, avatar,
      });
      const result = await UserRepository.create(user);
      const stats = await UserStatsRepository.create(result.id); // SUBSCRIBER
      user.stats = stats;
      return res.send(result);
    } catch (e) {
      return res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { name, email, password, avatar, id } = req.body;
      const user = new User();
      Object.assign(user, {
        name, email, password, avatar,
      });
      const result = await UserRepository.update(id, user);
      return res.send(result);
    } catch (e) {
      return res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const result = await UserRepository.delete(id);
      return res.send(result);
    } catch (e) {
      return res.status(500).json({
        status: 'error',
        message: e.message,
      });
    }
  }
}();
