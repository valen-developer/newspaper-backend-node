import jwt from 'jsonwebtoken';
import { IJWT } from '../domain/interfaces/JWT.interface';

export class JWT implements IJWT {
  decode(
    token: string,
    options: object
  ):
    | string
    | {
        [key: string]: any;
      }
    | null {
    return jwt.decode(token, options);
  }
  sign(
    payload: string | object | Buffer,
    secret: string,
    options?: jwt.SignOptions
  ): string {
    return jwt.sign(payload, secret, { ...options });
  }
  verify(token: string, secret: string, options?: object): boolean {
    const jwtResponse = jwt.verify(token, secret, options);

    if (!jwtResponse) return false;

    return true;
  }
}
