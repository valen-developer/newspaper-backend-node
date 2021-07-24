import { HTTPException } from '../../shared/domain/HTTPException';
import { NewRepository } from '../domain/interfaces/NewReposiory.interface';
import { New } from '../domain/New.model';

export class NewsFinder {
  constructor(private newsRepository: NewRepository) {}

  public async findOne(uuid: string): Promise<New> {
    return await this.newsRepository.get(uuid);
  }

  public async findAll(): Promise<New[]> {
    return await this.newsRepository.getAll();
  }
}
