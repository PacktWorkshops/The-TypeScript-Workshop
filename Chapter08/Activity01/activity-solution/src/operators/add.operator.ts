import { Operator } from "../interfaces/operator.interface";
import { injectable } from "inversify";

@injectable()
export class AddOperator implements Operator {
  readonly symbol = "+";

  public evaluate(a: number, b: number) {
    return a + b;
  }
}
