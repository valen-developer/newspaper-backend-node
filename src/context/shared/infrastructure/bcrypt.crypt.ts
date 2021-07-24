import bcrypt from 'bcrypt';
import { ICrypt } from '../domain/interfaces/Crypt.interface';

export class Bcrypt implements ICrypt {
  public hash(value: string, loops: number): string {
    return bcrypt.hashSync(value, loops);
  }
  compare(value: string, crypted: string): boolean {
    return bcrypt.compareSync(value, crypted);
  }
}
