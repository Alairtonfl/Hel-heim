import { Request, Response } from 'express';
import CreateQuestionService from '@Question/Services/CreateQuestionService';

export default new class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { question, answers, theme, dificulty } = req.body;
    const { userId } = req;
    const result = await CreateQuestionService.execute({
      question, userId, answers, theme, dificulty
    });
    if (result instanceof Error) { return res.status(400).json(result.message); }

    return res.send(result);
  }
}();
