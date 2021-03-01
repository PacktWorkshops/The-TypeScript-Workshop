import { DivideOperator } from "./divide.operator";

describe("Divide", () => {
  it("should perform basic division", () => {
    const operator = new DivideOperator();

    expect(operator.evaluate(10, 2)).toBe(5);
  });
});
