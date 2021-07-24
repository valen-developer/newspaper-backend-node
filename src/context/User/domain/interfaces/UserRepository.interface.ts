import { User, UserObject } from '../user.model';

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(uuid: string): Promise<boolean>;
  update(user: User): Promise<UserObject>;
  get(uuid: string): Promise<UserObject>;
  getAll(): Promise<UserObject[]>;
}
