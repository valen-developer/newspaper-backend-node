import { HTTPException } from '../../shared/domain/HTTPException';
import { UserRepository } from '../domain/interfaces/UserRepository.interface';
import { User } from '../domain/user.model';

export class UserFinder {
  constructor(private userRepository: UserRepository) {}

  public async getUser(uuid: string): Promise<User> {
    const userObject = await this.userRepository.get(uuid);

    if (!userObject)
      throw new HTTPException('user finder', 'user not found', 404);

    const user = new User(
      userObject.name,
      userObject.email,
      userObject.password,
      userObject.role
    );

    return user;
  }
}
