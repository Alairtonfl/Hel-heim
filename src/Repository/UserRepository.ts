import { BaseRepository } from '@Bases/BaseRepository';
import { User } from '@Entities/User';
import { getRepository } from 'typeorm';

export default new class UserRepository implements BaseRepository<User> {
  async findById(id: Number, entity: any): Promise<User> {
    try {
      // const repository = getRepository(entity);
      // const model: any = await repository.findOne(id);
      const model = await new User();
      model.id = '50';
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  findAll(entity: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  create(entity: any): Promise<User> {
    try {
      const repository = getRepository(entity);
      const model = repository.save(entity);
      return model;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  update(id: Number, entity: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  delete(id: Number, entity: any): Promise<User> {
    throw new Error('Method not implemented.');
  }
}();
