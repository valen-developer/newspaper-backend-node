import { UserRepository } from '../domain/interfaces/UserRepository.interface';

export class UserEliminator {
  constructor(private userRepository: UserRepository) {}

  public async delete(uuid: string): Promise<void> {
    await this.userRepository.delete(uuid);
  }
}
