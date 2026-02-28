import { calculator } from "../practice/calculator";

describe("Calculator", () => {
  describe("Sum method", () => {
    test("If calculator add method exists", () => {
      expect(typeof calculator.sum).toBe("function");
    });

    test("The sum of two numbers", () => {
      let testCases = [
        { a: 1, b: 2, expected: 3 },
        { a: 25, b: 25, expected: 50 },
        { a: 100, b: 43, expected: 143 },
      ];

      testCases.forEach((testCase) => {
        expect(calculator.sum(testCase.a, testCase.b)).toBe(testCase.expected);
      });
    });
  });

  describe("Subtract method", () => {
    test("If calculator subtract method exists", () => {
      expect(typeof calculator.subtract).toBe("function");
    });

    test("The difference of two numbers", () => {
      let testCases = [
        { a: 1, b: 1, expected: 0 },
        { a: 24, b: 23, expected: 1 },
        { a: 104, b: 102, expected: 2 },
      ];

      testCases.forEach((testCase) => {
        expect(calculator.subtract(testCase.a, testCase.b)).toBe(
          testCase.expected,
        );
      });
    });
  });

  describe("Divide method", () => {
    test("If calculator divide function exists", () => {
      expect(typeof calculator.divide).toBe("function");
    });

    test("The quotient of two numbers", () => {
      let testCases = [
        { a: 1, b: 1, expected: 1 },
        { a: 52, b: 51, expected: 1.0196 },
        { a: 204, b: 102, expected: 2 },
      ];

      testCases.forEach((testCase) => {
        expect(calculator.divide(testCase.a, testCase.b)).toBeCloseTo(
          testCase.expected,
        );
      });
    });
  });

  describe("Multiply method", () => {
    test("The product of two numbers", () => {
      let testCases = [
        { a: 1, b: 1, expected: 1 },
        { a: 8, b: 10, expected: 80 },
        { a: 204, b: 102, expected: 20808 },
      ];

      testCases.forEach((testCase) => {
        expect(calculator.multiply(testCase.a, testCase.b)).toBe(
          testCase.expected,
        );
      });
    });
  });
});
