/* eslint-disable object-shorthand */
import { BaseRepository } from '@Bases/BaseRepository';
import User from '@Entities/User';
import { getRepository } from 'typeorm';

export default new class UserRepository implements BaseRepository<User> {
  async findById(id: string): Promise<User> {
    try {
      const repository = getRepository(User);
      const model: User = await repository.createQueryBuilder('users')
        .leftJoinAndSelect('users.stats', 'user_stats')
        .leftJoinAndSelect('users.questions', 'question')
        .where('users.id = :id', { id: id })
        .getOne();
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const repository = getRepository(User);
      const model: User = await repository.findOne({ where: { email } });
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  async findAll(): Promise<Promise<User>[]> {
    try {
      const repository = getRepository(User);
      const model: any = await repository.createQueryBuilder('users')
        .leftJoinAndSelect('users.stats', 'user_stats')
        .getMany();
      return model;
    } catch (e) {
      console.log(e);
      throw new Error(`Error: ${e}`);
    }
  }

  async create(entity: User): Promise<User> {
    try {
      const repository = getRepository(User);
      const model: User = await repository.save(entity);
      return model;
    } catch (e) {
      console.log(e);
      throw new Error(`Error: ${e}`);
    }
  }

  async update(id: string, entity: User): Promise<User> {
    try {
      const repository = getRepository(User);
      const update: User = await repository.findOne(id);
      update.avatar = entity.avatar;
      update.email = entity.email;
      update.name = entity.name;
      const model = await repository.save(update);
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  async delete(id: string): Promise<User> {
    try {
      const repository = getRepository(User);
      const deleted: User = await repository.findOne(id);
      repository.remove(deleted);
      return deleted;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }
}();
