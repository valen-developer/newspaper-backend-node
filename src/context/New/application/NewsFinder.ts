import { HTTPException } from '../../shared/domain/HTTPException';
import { NewRepository } from '../domain/interfaces/NewReposiory.interface';
import { New } from '../domain/New.model';

export class NewsFinder {
  constructor(private newsRepository: NewRepository) {}

  public async findOne(uuid: string): Promise<New> {
    const news = await this.newsRepository.get(uuid);

    if (!news) throw new HTTPException('user finder', 'news not found', 404);

    return new New(news.uuid, news.title, news.description);
  }

  public async findAll(): Promise<New[]> {
    const news = await this.newsRepository.getAll();

    if (!news) throw new HTTPException('user finder', 'news not found', 404);

    return news.map((n) => new New(n.uuid, n.title, n.description));
  }
}
