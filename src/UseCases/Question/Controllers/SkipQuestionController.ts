import SkipQuestionService from "@Question/Services/SkipQuestionService";
import { Request, Response } from 'express';

export default new class SkipQuestionController {
    async handle(req: Request, res: Response) {
        const result = await SkipQuestionService.execute();

        const teste = {
            result: result
          }
        return res.send(teste);
    }
}
