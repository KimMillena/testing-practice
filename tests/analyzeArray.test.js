import { analyzeArray } from "../practice/analyzeArray";

describe("Analyze Array", () => {
  test("should return an object", () => {
    expect(analyzeArray([1, 2, 3])).toBeInstanceOf(Object);
  });

  test("should return an object with the properties: average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });

    expect(analyzeArray([0, 21, 3, 5, 6, 8])).toEqual({
      average: 7,
      min: 0,
      max: 21,
      length: 6,
    });
  });
});
