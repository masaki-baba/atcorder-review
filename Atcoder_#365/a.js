const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const S = input.slice(1);

function canEatAll(S) {
  for (let i = 1; i < S.length; i++) {
    if (S[i] === "sweet" && S[i - 1] === "sweet") {
      return "No";
    }
  }
  return "Yes";
}

console.log(canEatAll(S));
