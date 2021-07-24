import { UserRepository } from '../domain/interfaces/UserRepository.interface';
import { User } from '../domain/user.model';

export class UserCreator {
  constructor(private userRepository: UserRepository) {}

  public async create(user: User): Promise<void> {
    await this.userRepository.save(user);
  }
}
