import { User } from "../../../core/entities/User";
import { UserRepository } from "../../../core/repositories/UserRepository";
import { userModel } from "./mongooseUserModel";

export class MongoUserRepository implements UserRepository {
  private toEntity(doc: any): User {
    return new User(doc.name, doc.login, doc.email, doc.password, doc._id.toString());
  }

  async findByLogin(login: string) {
  const doc = await userModel.findOne({ login });
  return doc ? this.toEntity(doc) : null;
}

async getAll(): Promise<User[]> {
  const docs = await userModel.find();
  return docs.map(doc => this.toEntity(doc));
}


  async save(user: User): Promise<User> {
    const doc = await userModel.create(user);
    return this.toEntity(doc);
  }

  async findByEmail(email: string) {
    const doc = await userModel.findOne({ email });
    return doc ? this.toEntity(doc) : null;
  }

  async findById(id: string) {
    const doc = await userModel.findOne({ _id: id });
    return doc ? this.toEntity(doc) : null;
  }
/*
  async update(user: User) {
    const doc = await userModel.findByIdAndUpdate(
      user.id,
      {
        name: user.name,
        login: user.login,
        email: user.email,
        password: user.password,
      },
      { new: true }
    );
    return doc ? this.toEntity(doc) : null;
  }*/

  async update(id: string, userData: Partial<User>): Promise<User | null> {
  const doc = await userModel.findByIdAndUpdate(id, userData, { new: true });
  return doc ? this.toEntity(doc) : null;
}


  async delete(id: string) {
    await userModel.findOneAndDelete({ _id: id });
  }
}


export const userRepository = new MongoUserRepository();
