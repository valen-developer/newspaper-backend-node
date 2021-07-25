import { User, UserObject } from '../user.model';

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(uuid: string): Promise<boolean>;
  update(user: User): Promise<User>;
  get(uuid: string): Promise<User>;
  getByEmail(email: string): Promise<User>;
  getAll(): Promise<User[]>;
}
