import Question from '@Question/Entity/Question';
import FindNextQuestionRepository from '@Question/Repositories/FindNextQuestionRepository';

export default new class SkipQuestionService {
    async execute(): Promise<Question | Error> {
        
        const questions = await FindNextQuestionRepository.run();
        const question = questions[Math.floor(Math.random() * questions.length)]

      return question
    }
  }();