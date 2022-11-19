import VerifyAnswerQuestionService from '@Question/Services/VerifyAnswerQuestionService';
import UpdateUserStatsService from '@UserStats/Services/UpdateUserStatsService';
import { Request, Response } from 'express';

export default new class VerifyAnswerQuestionController {
  async handle(req: Request, res: Response) {
    const { questionId, answerId, phase } = req.body;
    const result = await VerifyAnswerQuestionService.execute(questionId,answerId);

    let prize = 1000;
    let prizeWin = 0;
    let prizeLose = 0;

    switch (phase){
      case 1: {
        prize = 5000;
        prizeWin = 1000;
        prizeLose = 500;
        break
      }
      case 2: {
        prize = 50000;
        prizeWin = 5000;
        prizeLose = 2500;
        break
      }
      case 3: {
        prize = 100000;
        prizeWin = 50000;
        prizeLose = 25000;
        break
      }
      case 4: {
        prize = 300000;
        prizeWin = 100000;
        prizeLose = 50000;
        break
      }
      case 5: {
        prize = 500000;
        prizeWin = 300000;
        prizeLose = 150000;
        break
      }
      case 6: {
        prize = 1000000;
        prizeWin = 500000;
        prizeLose = 0;
        break
      }
    }
    const teste = {
      result: result,
      prize: prize,
      prizeWin: prizeWin,
      prizeLose: prizeLose
    }

    return res.send(teste);
  }
}();
