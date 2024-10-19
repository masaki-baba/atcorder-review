const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T, A] = input[0].split(' ').map(Number);

function checkVictory(N, T, A) {
  const half = Math.floor(N / 2);

  if (T > half || A > half) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(checkVictory(N, T, A));
