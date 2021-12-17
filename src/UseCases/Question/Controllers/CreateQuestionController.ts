import { Request, Response } from 'express';
import CreateQuestionService from '@Question/Services/CreateQuestionService';

export default new class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { question, userId } = req.body;
    const result = CreateQuestionService.execute({
      question, userId,
    });

    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
