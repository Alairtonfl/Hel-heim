import CreateQuestionRepository from '@Question/Repositories/CreateQuestionRepository';
import Question from '@Question/Entity/Question';

interface IQuestionRequest {
    question: string;
    userId: number;
}

export default new class CreateQuestionService {
  async execute({ question, userId }: IQuestionRequest): Promise<Question | Error> {
    const questions = new Question();
    Object.assign(questions, {
      question, userId,
    });
    const model = await CreateQuestionRepository.run(questions);
    return model;
  }
}();
