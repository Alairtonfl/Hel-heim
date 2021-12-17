import CreateQuestionRepository from '@Question/Repositories/CreateQuestionRepository';
import Question from '@Question/Entity/Question';
import Answer from '@Answer/Entity/Answer';

interface IQuestionRequest {
    question: string;
    userId: number;
    answers: Answer[]
}

export default new class CreateQuestionService {
  async execute({ question, userId, answers }: IQuestionRequest): Promise<Question | Error> {
    const questions = new Question();
    Object.assign(questions, {
      question, userId, answers,
    });
    const model = await CreateQuestionRepository.run(questions);
    return model;
  }
}();
