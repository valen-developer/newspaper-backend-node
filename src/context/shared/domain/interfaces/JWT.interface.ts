export interface IJWT {
  decode(token: string, options: object): any;
  sign(
    payload: string | Buffer | object,
    secret: string,
    options?: any
  ): string;
  verify(token: string, secret: string, options?: object): boolean;
}
