import FindAllUsersService from '@User/Services/FindAllUsersService';
import { Request, Response } from 'express';

export default new class FindAllUsersController {
  async handle(req: Request, res: Response) {
    const result = await FindAllUsersService.execute();
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('Usuarios não encontrados.'); }

    return res.send(result);
  }
}();
