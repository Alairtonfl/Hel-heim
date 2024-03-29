import Answer from "@Answer/Entity/Answer";
import { getRepository } from "typeorm";

export default new class FindAnswerByIdRepository{
    async run(answerId: number) : Promise<Answer>{
        const repository = getRepository(Answer);
        const model = await repository.findOne({
            where: {
                id: answerId
            }
        })
        return model;
    }
}