import { Request, Response } from 'express';
import CreateQuestionService from '@Question/Services/CreateQuestionService';

export default new class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { question, userId, answers } = req.body;
    const result = await CreateQuestionService.execute({
      question, userId, answers,
    });
    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
