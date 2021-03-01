import { Calculator } from "./index";

describe("Calculator", () => {
  it("should support running given operators", () => {
    const calculator = new Calculator([
      { symbol: "+", evaluate: (a, b) => a + b },
      { symbol: "-", evaluate: (a, b) => a - b }
    ]);

    expect(calculator.evaluate("5+3-4")).toBe(4);
  });

  it("should error on unsupported operator", () => {
    const calculator = new Calculator([]);

    expect(() => calculator.evaluate("1+4")).toThrowError();
  });

  it("should support passing an empty expression", () => {
    const calculator = new Calculator([]);

    expect(calculator.evaluate("")).toBeNull();
  });
});
