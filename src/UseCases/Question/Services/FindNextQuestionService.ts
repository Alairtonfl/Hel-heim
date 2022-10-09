import Question from '@Question/Entity/Question';
import FindNextQuestionRepository from '@Question/Repositories/FindNextQuestionRepository';

export default new class FindNextQuestionService {
  async execute(): Promise<Question | Error> {
    let questions = await FindNextQuestionRepository.run();
    let question = questions[Math.floor(Math.random() * questions.length)]

    return question;
  }
}();
