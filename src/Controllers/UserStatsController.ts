import { User } from '@Entities/User';
import UserStatsRepository from '@Repository/UserStatsRepository';

export default new class UserStatsController {
  async findByUserId(user: User) {
    try {
      const userStats = await UserStatsRepository.findByUserId(user.id);
      return userStats;
    } catch (e) {
      return e;
    }
  }
}();
