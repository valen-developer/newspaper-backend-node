import { New, NewObject } from '../New.model';

export interface NewRepository {
  save(news: New): Promise<void>;
  delete(uuid: string): Promise<void>;
  update(news: New): Promise<NewObject>;
  get(uuid: string): Promise<NewObject>;
  getAll(): Promise<NewObject[]>;
}
