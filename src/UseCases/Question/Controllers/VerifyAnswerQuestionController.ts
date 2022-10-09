import VerifyAnswerQuestionService from '@Question/Services/VerifyAnswerQuestionService';
import { Request, Response } from 'express';

export default new class VerifyAnswerQuestionController {
  async handle(req: Request, res: Response) {
    const { questionId, answerId } = req.body;
    const result = await VerifyAnswerQuestionService.execute(questionId,answerId);

    return res.send(result);
  }
}();
