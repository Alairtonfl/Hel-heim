import FindAnswerByIdRepository from '@Answer/Repositories/FindAnswerByIdRepository';
import Question from '@Question/Entity/Question';
import FindNextQuestionRepository from '@Question/Repositories/FindNextQuestionRepository';

export default new class FindQuestionsByUserIdService {
  async execute(questionId: number, answerId: number): Promise<Question | Error> {
    const answer = await FindAnswerByIdRepository.run(answerId); 
    let question = null;
    if(answer.correct){
        const questions = await FindNextQuestionRepository.run();
        question = questions[Math.floor(Math.random() * questions.length)]
    }

    return question
  }
}();
