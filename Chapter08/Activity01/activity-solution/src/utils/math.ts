import { Operator } from "../interfaces/operator.interface";

export function tryParseNumberString(
  x: string
): { isNumberString: true; number: number } | { isNumberString: false } {
  const maybeNumber = Number.parseInt(x, 10);
  const isNumberString = !isNaN(maybeNumber);
  if (isNumberString) {
    return { isNumberString: true, number: maybeNumber };
  }

  return { isNumberString: false };
}

export function tryParseOperatorSymbol(
  x: string,
  operators: readonly Operator[]
):
  | { isOperatorSymbol: true; operator: Operator }
  | { isOperatorSymbol: false } {
  const matchingOperator = operators.find(operator => operator.symbol === x);
  if (matchingOperator) {
    return { isOperatorSymbol: true, operator: matchingOperator };
  }

  return { isOperatorSymbol: false };
}
