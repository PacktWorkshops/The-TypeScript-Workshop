import { SubtractOperator } from "./subtract.operator";

describe("Subtract", () => {
  it("should perform basic subtraction", () => {
    const operator = new SubtractOperator();

    expect(operator.evaluate(5, 3)).toBe(2);
  });
});
