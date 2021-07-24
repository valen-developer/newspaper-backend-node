import { HTTPException } from '../../shared/domain/HTTPException';
import { NewRepository } from '../domain/interfaces/NewReposiory.interface';

export class NewsEliminator {
  constructor(private newsRepository: NewRepository) {}

  public async delete(uuid: string): Promise<void> {
    const isDeleted = await this.newsRepository.delete(uuid);

    if (!isDeleted)
      throw new HTTPException('news eliminator', 'new not found', 404);
  }
}
