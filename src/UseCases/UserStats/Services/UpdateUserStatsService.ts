import UserStats from '@UserStats/Entity/UserStats';
import FindUserStatsByUserIdRepository from '@UserStats/Repositories/FindUserStatsByUserIdRepository';
import UpdateUserStatsRepository from '@UserStats/Repositories/UpdateUserStatsRepository';



export default new class UpdateUserStatsService {
    async execute(userid, wins, defeats, answer_questions, prizee): Promise<UserStats | Error> {

      const userStats = await FindUserStatsByUserIdRepository.run(userid);
      userStats.wins = userStats.wins + wins;
      userStats.defeats = defeats + userStats.defeats;
      userStats.answer_questions = answer_questions + userStats.answer_questions;
      userStats.prizee = prizee + userStats.prizee;
      userStats.matchs = userStats.matchs + 1;

      const model = await UpdateUserStatsRepository.run(userStats);
      
      return model;
    }
  }();