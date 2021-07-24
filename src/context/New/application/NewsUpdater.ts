import { HTTPException } from '../../shared/domain/HTTPException';
import { NewRepository } from '../domain/interfaces/NewReposiory.interface';
import { New } from '../domain/New.model';

export class NewsUpdater {
  constructor(private newsRepository: NewRepository) {}

  public async update(news: New): Promise<New> {
    const newNew = await this.newsRepository.update(news);

    if (!newNew) throw new HTTPException('news updater', 'news not found', 404);

    return new New(newNew.uuid, newNew.title, newNew.description);
  }
}
