import { UUID } from '../../shared/domain/valueObjects/uuid.valueObject';
import { UserEmail } from './valueObject/UserEmail.valueObject';
import { UserName } from './valueObject/UserName.valueObject';
import { UserPassword } from './valueObject/UserPassword.valueObject';
import { ROLE, UserROLE } from './valueObject/UserRol.valueObject';

export class User {
  public readonly uuid: UUID;
  public readonly name: UserName;
  public readonly email: UserEmail;
  public readonly password: UserPassword;
  public readonly role: UserROLE;

  constructor(
    uuid: string,
    name: string,
    email: string,
    password: string | null | undefined,
    role: ROLE
  ) {
    this.uuid = new UUID(uuid);
    this.name = new UserName(name);
    this.email = new UserEmail(email);
    this.password = new UserPassword(password);
    this.role = new UserROLE(role);
  }

  public toObject(): UserObject {
    return {
      uuid: this.uuid.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value ? this.password.value : '',
      role: this.role.value,
    };
  }

  public toObjectWithoutPassword(): UserObject {
    return {
      uuid: this.uuid.value,
      name: this.name.value,
      email: this.email.value,
      role: this.role.value,
    };
  }
}

export interface UserObject {
  uuid: string;
  name: string;
  email: string;
  password?: string;
  role: ROLE;
}
