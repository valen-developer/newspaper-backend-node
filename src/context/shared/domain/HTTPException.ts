export class HTTPException implements Error {
  public readonly name: string;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(name: string, message: string, statusCode: number) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
