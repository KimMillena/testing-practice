export function analyzeArray(numArray) {
  let object = {};

  object.average = Math.floor(
    numArray.reduce((accumulator, current) => accumulator + current, 0) /
      numArray.length,
  );
  object.min = Math.min(...numArray);
  object.max = Math.max(...numArray);
  object.length = numArray.length;

  return object;
}
