import { MultiplyOperator } from "./multiply.operator";

describe("Multiply", () => {
  it("should perform basic multiplication", () => {
    const operator = new MultiplyOperator();

    expect(operator.evaluate(6, 4)).toBe(24);
  });
});
