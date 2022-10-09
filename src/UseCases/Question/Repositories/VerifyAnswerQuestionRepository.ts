import Question from '@Question/Entity/Question';
import { getRepository } from 'typeorm';

export default new class VerifyAnswerQuestionRepository {
  async run(questionId: number) : Promise<Question> {
    const repository = getRepository(Question);
    const model = await repository.findOne({
      relations: ['answers'],
      where: {
        questionId,
      },
    });
    return model;
  }
}();
