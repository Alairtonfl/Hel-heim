import { BaseRepository } from "@Bases/BaseRepository";
import { User } from "@Entities/User";
import { getRepository } from "typeorm";

export default new class UserRepository implements BaseRepository<User>{
    async loadById(id: Number, entity: any): Promise<User> {
        //const repository = getRepository(entity);
        //const model: any = await repository.findOne(id);
        const model = await new User()
        model.id = "50";
        return model;
    }
}