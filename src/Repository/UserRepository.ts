/* eslint-disable object-shorthand */
import { BaseRepository } from '@Bases/BaseRepository';
import User from '@Entities/User';
import { getRepository } from 'typeorm';

export default new class UserRepository implements BaseRepository<User> {
  async findById(id: number): Promise<User> {
    const repository = getRepository(User);
    const model: User = await repository.findOne({
      id,
    }, {
      relations: ['stats', 'questions'],
    });
    return model;
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const repository = getRepository(User);
      const model: User = await repository.findOne({
        where: {
          email,
        },
      });
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  async findAll(): Promise<User[]> {
    const repository = getRepository(User);
    const model = await repository.find({
      relations: ['stats'],
    });
    return model;
  }

  async create(entity: User): Promise<User> {
    const repository = getRepository(User);
    const model: User = await repository.save(entity);
    return model;
  }

  async update(id: string, entity: User): Promise<User> {
    const repository = getRepository(User);
    const update: User = await repository.findOne(id);
    update.avatar = entity.avatar;
    update.email = entity.email;
    update.name = entity.name;
    const model = await repository.save(update);
    return model;
  }

  async delete(id: string): Promise<User> {
    const repository = getRepository(User);
    const deleted: User = await repository.findOne(id);
    repository.remove(deleted);
    return deleted;
  }
}();
