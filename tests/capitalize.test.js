import { capitalize } from "../practice/capitalize";

test("First letter should be capitalized", () => {
  let testCases = [
    { input: "helloworld", expected: "Helloworld" },
    { input: "love", expected: "Love" },
    { input: "hanni", expected: "Hanni" },
  ];

  testCases.forEach((testCase) => {
    expect(capitalize(testCase.input)).toBe(testCase.expected);
  });
});
