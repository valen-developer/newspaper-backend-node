import { HTTPException } from '../../shared/domain/HTTPException';
import { NewRepository } from '../domain/interfaces/NewReposiory.interface';
import { New } from '../domain/New.model';

export class NewsUpdater {
  constructor(private newsRepository: NewRepository) {}

  public async update(news: New): Promise<New> {
    return await this.newsRepository.update(news);
  }
}
