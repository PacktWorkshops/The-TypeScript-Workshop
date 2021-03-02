import { injectable, multiInject } from 'inversify';
import { Operator } from '../interfaces/operator.interface';
import { TYPES } from '../types';
import { tryParseNumberString, tryParseOperatorSymbol } from "../utils/math";

@injectable()
export class Calculator {
    constructor(@multiInject(TYPES.Operator) private operators: Operator[]) {}

    evaluate(expression: string) {
        const expressionParts = expression.match(/[\d\.]+|\D+/g);
        if (expressionParts === null) return null;

        const parsedExpressionParts = expressionParts.map(part => {
            const numberParseResult = tryParseNumberString(part);
            if (numberParseResult.isNumberString) return numberParseResult.number;
            
            const operatorParseResult = tryParseOperatorSymbol(part, this.operators);
            if (operatorParseResult.isOperatorSymbol) return operatorParseResult.operator;
    
            throw new Error(`Unexpected part: ${part}`);
        });
     
     const { result } = parsedExpressionParts.reduce<{
          result: number; 
          queuedOperator: Operator | null
        }>((acc, part) => {
            if (typeof part === 'number') {
            // this is the first number we’ve encountered, just set the result to that.
              if (acc.queuedOperator === null) {
                  return { ...acc, result: part };
            }

            // there’s a queued operator – evaluate the previous result with this and
            // clear the queued one.
            return {
                queuedOperator: null,
                result: acc.queuedOperator.evaluate(acc.result, part),
             };
        }

        // this is an operator – queue it for later execution
        return {
            ...acc,
            queuedOperator: part,
        };
    }, 
    { result: 0, queuedOperator: null });

    return result; 
  }
}
