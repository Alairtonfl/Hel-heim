import CreateQuestionRepository from '@Question/Repositories/CreateQuestionRepository';
import Question from '@Question/Entity/Question';
import Answer from '@Answer/Entity/Answer';

interface IQuestionRequest {
    question: string;
    theme: string;
    dificulty: string;
    userId: number;
    answers: Answer[]
}

export default new class CreateQuestionService {
  async execute({ question, userId, answers, theme, dificulty }: IQuestionRequest): Promise<Question | Error> {
    const questions = new Question();
    answers = answers.sort(() => Math.random() - 0.5)
    answers = answers.sort(() => Math.random() - 0.5)
    answers = answers.sort(() => Math.random() - 0.5)
    Object.assign(questions, {
      question, userId, answers, theme, dificulty
    });
    console.log(questions)
    const model = await CreateQuestionRepository.run(questions);
    return model;
  }
}();
