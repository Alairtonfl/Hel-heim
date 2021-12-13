import FindUserByIdService from '@User/Services/FindUserByIdService';
import { Request, Response } from 'express';

export default new class FindUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const result = await FindUserByIdService.execute(+id);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('Usuario não encontrado.'); }

    return res.send(result);
  }
}();
