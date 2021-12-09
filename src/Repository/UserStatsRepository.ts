import { UserStats } from '@Entities/UserStats';
import { getRepository } from 'typeorm';

export default new class UserStatsRepository {
  findByUserId(id: number): Promise<UserStats> {
    throw new Error('Method not implemented.');
  }

  async create(id: number): Promise<UserStats> {
    try {
      const repository = getRepository(UserStats);
      const userStats = new UserStats();
      userStats.id = id;
      const model = await repository.save(userStats);
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }
}();
