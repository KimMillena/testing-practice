import { caesarCipher } from "../practice/caesarCipher";

describe("Caesar Cipher", () => {
  test("If caesarCipher function exists", () => {
    expect(typeof caesarCipher).toBe("function");
  });

  test("xyz should return abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("shifted letter case should follow the original lettercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("non-alphabetical characters should remain unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  })
});
