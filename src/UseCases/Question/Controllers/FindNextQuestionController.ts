import FindNextQuestionsService from '@Question/Services/FindNextQuestionService';
import { Request, Response } from 'express';

export default new class FindQuestionsByUserIdController {
  async handle(req: Request, res: Response) {
    const result = await FindNextQuestionsService.execute();
    if (result == null) { return res.send('Questions not found.'); }

    return res.send(result);
  }
}();
