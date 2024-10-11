function countMuchingStr(S) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i].length === i + 1) {
      count++;
    }
  }
  return count;
}

S = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
]

console.log(countMuchingStr(S));