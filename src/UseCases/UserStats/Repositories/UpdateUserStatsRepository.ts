import UserStats from '@UserStats/Entity/UserStats';
import { getRepository } from 'typeorm';

export default new class UpdateUserStatsRepository {
  async run(entity: UserStats): Promise<UserStats> {
    const repository = getRepository(UserStats);
    const update: UserStats = await repository.findOne(entity.id);

    update.answer_questions = entity.answer_questions;
    update.defeats = entity.defeats;
    update.matchs = entity.matchs;
    update.prizee = entity.prizee;
    update.wins = entity.wins;
    
    const model = await repository.save(update);
    return model;
  }
}();
