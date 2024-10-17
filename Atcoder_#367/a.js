const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);

function canShout(A, B, C) {
  if (B < C) {
    if (A >= B && A < C) {
      return "No";
    } else {
      return "Yes";
    }
  } else {
    if (A >= B || A < C) {
      return "No";
    } else {
      return "Yes";
    }
  }
}

// 結果を出力
console.log(canShout(A, B, C));