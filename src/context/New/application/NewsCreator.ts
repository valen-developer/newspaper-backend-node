import { NewRepository } from '../domain/interfaces/NewReposiory.interface';
import { New } from '../domain/New.model';

export class NewsCreator {
  constructor(private newsRepository: NewRepository) {}

  public async create(news: New): Promise<void> {
    await this.newsRepository.save(news);
  }
}
