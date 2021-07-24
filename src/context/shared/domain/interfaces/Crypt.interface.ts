export interface ICrypt {
  hash(value: string, loops: number): string;
  compare(value: string, crypted: string): boolean;
}
