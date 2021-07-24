import { New, NewObject } from '../New.model';

export interface NewRepository {
  save(news: New): Promise<void>;
  delete(uuid: string): Promise<boolean>;
  update(news: New): Promise<New>;
  get(uuid: string): Promise<New>;
  getAll(): Promise<New[]>;
}
