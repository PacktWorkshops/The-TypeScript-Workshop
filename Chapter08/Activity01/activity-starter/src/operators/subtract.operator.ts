// operators/subtract.operator.ts
import { injectable } from 'inversify';
import { Operator } from '../interfaces/operator.interface';

@injectable()
export class SubtractOperator implements Operator {
    readonly symbol = '-';

    public evaluate(a: number, b: number) {
        return a - b;
    }
}
