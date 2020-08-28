import { injectable } from "inversify";
import { Operator } from "../interfaces/operator.interface";

@injectable()
export class DivideOperator implements Operator {
  readonly symbol = "/";

  public evaluate(a: number, b: number) {
    return a / b;
  }
}
