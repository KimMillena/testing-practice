import { capitalize } from "../practice/capitalize";

test("First letter should be capitalized", () => {
  let testCases = ["helloworld", "love", "hanni"];

  testCases.forEach((testCase) => {
    let expected = testCase.charAt(0).toUpperCase() + testCase.slice(1);
    expect(capitalize(testCase)).toBe(expected);
  });
});
