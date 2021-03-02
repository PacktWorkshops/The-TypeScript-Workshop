// operators/multiply.operator.ts
import { injectable } from 'inversify';
import { Operator } from '../interfaces/operator.interface';

@injectable()
export class MultiplyOperator implements Operator {
    readonly symbol = '*';

    public evaluate(a: number, b: number) {
        return a * b;
    }
}
