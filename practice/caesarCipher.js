export function caesarCipher(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // This is where to store the original array
  let originalArr = [];

  // Convert string input to array of characters
  let convertStrToArray = string.split("");

  // This is where to store the index of the letters
  let index = [];
  let result = "";

  for (let i = 0; i < convertStrToArray.length; i++) {
    let char = convertStrToArray[i];

    // Store original content of the array
    originalArr.push(char);

    // Convert array characters to lowercase for comparison in the next loop
    // REASON: the alphabet array contains lowercase alphabet letters and doesn't have uppercase
    // So we need to convert to lowercase for the comparison to work
    convertStrToArray[i] = convertStrToArray[i].toLowerCase();
    for (let j = 0; j < alphabet.length; j++) {
      // compare if the character is in the alphabet and store the index
      if (convertStrToArray[i] === alphabet[j]) {
        index.push(j);
        console.log(convertStrToArray[i] + " " + alphabet[j]);
        console.log(index);
      }
    }
  }

  console.log("converted: ", convertStrToArray);
  console.log("Orig", originalArr);

  // Pointer to track index of letters
  let letterPointer = 0;

  for (let i = 0; i < convertStrToArray.length; i++) {
    console.log("Current Length", convertStrToArray.length);
    let currentChar = convertStrToArray[i];

    // Check if the currentChar is in the alphabet
    if (alphabet.includes(currentChar)) {
      console.log("Includes True");
      let shiftedIndex = (index[letterPointer] + shift) % alphabet.length;
      let shiftedChar = alphabet[shiftedIndex];

      // Check original array if current letter at index is uppercase to restore uppercase to current shiftedChar
      if (originalArr[i] === originalArr[i].toUpperCase()) {
        console.log("Orig arr:", originalArr[i]);
        shiftedChar = shiftedChar.toUpperCase();
        console.log("Shifted:", shiftedChar);
      }

      result += shiftedChar;
      letterPointer++;
    } else {
      // Add to result non-alphabet characters
      result += originalArr[i];
    }
  }

  return result;
}
