import { UserStats } from '@Entities/UserStats';
import { getRepository } from 'typeorm';

export default new class UserStatsRepository {
  findByUserId(id: number): Promise<UserStats> {
    throw new Error('Method not implemented.');
  }
}();
