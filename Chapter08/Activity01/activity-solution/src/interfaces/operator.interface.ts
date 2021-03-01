export interface Operator {
  readonly symbol: string;

  evaluate(a: number, b: number): number;
}
