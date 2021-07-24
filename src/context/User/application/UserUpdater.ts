import { HTTPException } from '../../shared/domain/HTTPException';
import { UserRepository } from '../domain/interfaces/UserRepository.interface';
import { User } from '../domain/user.model';

export class UserUpdater {
  constructor(private userRepository: UserRepository) {}

  public async update(user: User): Promise<User> {
    return await this.userRepository.update(user);
  }
}
