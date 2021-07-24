import { Document } from 'mongoose';
import { HTTPException } from '../../../shared/domain/HTTPException';
import { NewRepository } from '../../domain/interfaces/NewReposiory.interface';
import { New, NewObject } from '../../domain/New.model';
import { NewsMongoModel } from './MongoNewsModel';

export class MongoNewsRepository implements NewRepository {
  public async save(news: New): Promise<void> {
    try {
      const newMongo: Document = new NewsMongoModel(news.toObject());
      await newMongo.save();
    } catch (error: any) {
      const keyPattern = error.keyPattern;
      if (!keyPattern)
        throw new HTTPException(
          'mongo news Repository: save',
          'server error',
          500
        );

      const keys = Object.keys(keyPattern);
      throw new HTTPException(
        'mongo news Repository: save',
        `${keys[0]} already exist`,
        400
      );
    }
  }

  public async delete(uuid: string): Promise<boolean> {
    try {
      await NewsMongoModel.findOneAndDelete({ uuid });
      return true;
    } catch (error) {
      return false;
    }
  }

  public async update(news: New): Promise<New> {
    try {
      await NewsMongoModel.findOneAndUpdate(
        { uuid: news.uuid.value },
        news.toObject()
      );
      return news;
    } catch (error) {
      throw new HTTPException('mongo news repository', 'new not found', 404);
    }
  }

  public async get(uuid: string): Promise<New> {
    try {
      const newMongo: NewObject = await NewsMongoModel.findOne({ uuid });
      return new New(newMongo.uuid, newMongo.title, newMongo.description);
    } catch (error) {
      throw new HTTPException('mongo news repository', ' new not found', 404);
    }
  }

  public async getAll(): Promise<New[]> {
    try {
      const newsMongo: NewObject[] = await NewsMongoModel.find();
      return newsMongo.map((n) => new New(n.uuid, n.title, n.description));
    } catch (error) {
      return [];
    }
  }
}
