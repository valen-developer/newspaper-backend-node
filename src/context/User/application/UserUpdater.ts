import { HTTPException } from '../../shared/domain/HTTPException';
import { UserRepository } from '../domain/interfaces/UserRepository.interface';
import { User } from '../domain/user.model';

export class UserUpdater {
  constructor(private userRepository: UserRepository) {}

  public async update(user: User): Promise<User> {
    const userObject = await this.userRepository.update(user);

    if (!userObject)
      throw new HTTPException('user updater', 'user not found', 404);

    return new User(
      userObject.name,
      userObject.email,
      userObject.password,
      userObject.role
    );
  }
}
