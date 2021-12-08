import { Request, Response } from 'express';
import UserRepository from '@Repository/UserRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserRepository.findByEmail(email);

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, 'secretKEY', { expiresIn: '1d' });
    delete user.password;
    return res.json({
      user,
      token,
    });
  }
}
