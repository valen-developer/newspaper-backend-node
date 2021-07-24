import { NewRepository } from '../domain/interfaces/NewReposiory.interface';

export class NewsEliminator {
  constructor(private newsRepository: NewRepository) {}

  public async delete(uuid: string): Promise<void> {
    await this.newsRepository.delete(uuid);
  }
}
