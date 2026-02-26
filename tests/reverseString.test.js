import { reverseString } from "../practice/reverseString";

test("Reverses a string", () => {
  let testCases = [
    { input: "Hello", expected: "olleH" },
    { input: "Cool", expected: "looC" },
    { input: "Race", expected: "ecaR" },
  ];

  testCases.forEach((testCase) => {
    expect(reverseString(testCase.input)).toBe(testCase.expected);
  });
});
