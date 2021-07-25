export interface Middleware {
  run(req: any, res: any, next: any): Promise<void> | void;
}
