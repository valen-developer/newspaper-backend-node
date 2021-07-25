import { HTTPException } from '../../shared/domain/HTTPException';
import { UserRepository } from '../domain/interfaces/UserRepository.interface';
import { User } from '../domain/user.model';

export class UserFinder {
  constructor(private userRepository: UserRepository) {}

  public async getUser(uuid: string): Promise<User> {
    return await this.userRepository.get(uuid);
  }

  public async getByEmail(email: string): Promise<User> {
    return await this.userRepository.getByEmail(email);
  }

  public async getAll(): Promise<User[]> {
    return await this.getAll();
  }
}
