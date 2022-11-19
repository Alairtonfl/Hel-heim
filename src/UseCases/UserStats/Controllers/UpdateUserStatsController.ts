import UpdateUserStatsService from "@UserStats/Services/UpdateUserStatsService";
import { Request, Response } from 'express';

export default new class UpdateUserStatsController {
    async handle(req: Request, res: Response) {
        const { wins, defeats, answer_questions, prizee } = req.body;
        const result = await UpdateUserStatsService.execute(req.userId, wins, defeats, answer_questions, prizee);

        return res.send(result);
    }
}
