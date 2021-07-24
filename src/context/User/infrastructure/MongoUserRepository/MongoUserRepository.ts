import { HTTPException } from '../../../shared/domain/HTTPException';

import { UserRepository } from '../../domain/interfaces/UserRepository.interface';
import { User, UserObject } from '../../domain/user.model';

import { UserMongoModel } from './MongoUserModel';

export class MongoUserRepository implements UserRepository {
  public async save(user: User): Promise<void> {
    const userMongo = new UserMongoModel(user.toObject());

    try {
      await userMongo.save();
    } catch (error: any) {
      const keyPattern = error.keyPattern;
      if (!keyPattern)
        throw new HTTPException(
          'mongo user repository:save ',
          'server error',
          500
        );

      const keys = Object.keys(keyPattern);
      throw new HTTPException(
        'mongo user repository:save ',
        `${keys[0]} already exist`,
        400
      );
    }
  }

  public async delete(uuid: string): Promise<boolean> {
    try {
      await UserMongoModel.findOneAndDelete({ uuid });
      return true;
    } catch (error) {
      return false;
    }
  }

  public async update(user: User): Promise<User> {
    try {
      await UserMongoModel.findByIdAndUpdate(
        { uuid: user.uuid.value },
        user.toObject()
      );
      return user;
    } catch (error) {
      throw new HTTPException(
        'mongo user repository: update',
        'user can´t be updated',
        400
      );
    }
  }

  public async get(uuid: string): Promise<User> {
    try {
      const userMongo: UserObject = await UserMongoModel.findOne({ uuid });

      return new User(
        userMongo.uuid,
        userMongo.name,
        userMongo.email,
        userMongo.password,
        userMongo.role
      );
    } catch (error) {
      throw new HTTPException(
        'mongo user repository: get',
        'user not found',
        404
      );
    }
  }

  public async getAll(): Promise<User[]> {
    try {
      const usersMongo: UserObject[] = await UserMongoModel.find();

      return usersMongo.map(
        (u) => new User(u.uuid, u.name, u.email, u.password, u.role)
      );
    } catch (error) {
      return [];
    }
  }
}
