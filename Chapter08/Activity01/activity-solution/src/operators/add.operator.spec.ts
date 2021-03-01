import { AddOperator } from "./add.operator";

describe("Add", () => {
  it("should perform basic addition", () => {
    const operator = new AddOperator();

    expect(operator.evaluate(1, 2)).toBe(3);
  });
});
