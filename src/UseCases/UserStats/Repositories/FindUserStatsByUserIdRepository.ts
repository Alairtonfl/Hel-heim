import UserStats from '@UserStats/Entity/UserStats';
import { getRepository } from 'typeorm';

export default new class FindUserStatsByUserIdRepository {
  async run(userId: number): Promise<UserStats> {
    const repository = getRepository(UserStats);

    const model: UserStats = await repository.findOne({
      where: {
        userId: userId
      }
    });
    return model;
  }
}();
