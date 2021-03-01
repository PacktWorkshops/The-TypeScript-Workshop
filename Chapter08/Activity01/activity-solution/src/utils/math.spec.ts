import { tryParseNumberString, tryParseOperatorSymbol } from "./math";

describe("Math utils", () => {
  describe("tryParseNumberString", () => {
    it("should parse number strings correctly", () => {
      const result = tryParseNumberString("34");
      expect(result.isNumberString).toBe(true);
      expect((result as any).number).toBe(34);
    });

    it("should return false for non-number strings", () => {
      const result = tryParseNumberString("foo");
      expect(result.isNumberString).toBe(false);
      expect((result as any).number).not.toBeDefined();
    });
  });

  describe("tryParseOperatorSymbol", () => {
    it("should parse known operators correctly", () => {
      const result = tryParseOperatorSymbol("+", [
        { symbol: "+", evaluate: noop }
      ]);
      expect(result.isOperatorSymbol).toBe(true);
    });

    it("should parse unknown operators correctly", () => {
      const result = tryParseOperatorSymbol("/", [
        { symbol: "+", evaluate: noop }
      ]);
      expect(result.isOperatorSymbol).toBe(false);
    });
  });
});

function noop(...args: any[]): any {}
