// 入力
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0]);

// 初期値
const A = [];
const S = [];

for (let i = 1; i <= N; i++) {
  const [a, s] = input[i].split(' ');
  A.push(parseInt(a));
  S.push(s);
}

function minFatigue(N, A, S) {
  let leftPosi = 0;
  let rightPosi = 0;
  let fatigue = 0;

  for (let i = 0; i < N; i++) {
    if (S[i] === 'L') {
      if (leftPosi === 0) {
        leftPosi = A[i];
      } else {
        fatigue += Math.abs(leftPosi - A[i]);
        leftPosi = A[i];
      }
    } else if (S[i] === 'R') {
      if (rightPosi === 0) {
        rightPosi = A[i];
      } else {
        fatigue += Math.abs(rightPosi - A[i]);
        rightPosi = A[i];
      }
    }
  }

  return fatigue;
}

console.log(minFatigue(N, A, S));
