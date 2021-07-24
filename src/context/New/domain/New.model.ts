import { UUID } from '../../shared/domain/valueObjects/uuid.valueObject';
import { NewDescription } from './valueObject/NewDescription.valueObject';
import { NewTitle } from './valueObject/NewTitle.valueObject';

export class New {
  public readonly uuid: UUID;
  public readonly title: NewTitle;
  public readonly description: NewDescription;

  constructor(uuid: string, title: string, description: string) {
    this.uuid = new UUID(uuid);
    this.title = new NewTitle(title);
    this.description = new NewDescription(description);
  }

  public toObject(): NewObject {
    return {
      uuid: this.uuid.value,
      title: this.title.value,
      description: this.description.value,
    };
  }
}

export interface NewObject {
  uuid: string;
  title: string;
  description: string;
}
