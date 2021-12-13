import CreateUserStatsRepository from '@UserStats/Repositories/CreateUserStatsRepository';
import User from '@User/Entity/User';
import CreateUserRepository from '@User/Repositories/CreateUserRepository';

interface UserRequest {
    name: string;
    password: string;
    avatar: string;
    email: string;
}

export default new class CreateUserService {
  async execute({ name, email, password, avatar }: UserRequest): Promise<User | Error> {
    const user = new User();
    Object.assign(user, {
      name, email, password, avatar,
    });
    const model = await CreateUserRepository.run(user);
    const stats = await CreateUserStatsRepository.run(model.id);
    model.stats = stats;
    return model;
  }
}();
