import FindUserByEmailService from '@User/Services/FindUserByEmailService';
import { Request, Response } from 'express';

export default new class FindUserByEmailController {
  async handle(req: Request, res: Response) {
    const { Email } = req.params;
    const result = await FindUserByEmailService.execute(+Email);
    if (result instanceof Error) { return res.status(400).json(result.message); }
    if (result == null) { return res.send('Usuario não encontrado.'); }

    return res.send(result);
  }
}();
