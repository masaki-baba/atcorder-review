// 入力用
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0], 10);
const A = Array(N).fill(0).map((_, i) => input.slice(1 + i * N, 1 + (i + 1) * N).map(Number));

// メイン処理
function combineElements(N, A) {
  let currentElement = 1; // 最初は元素1

  for (let j = 2; j <= N; j++) {
    if (currentElement >= j) {
      currentElement = A[currentElement - 1][j - 1];
    } else {
      currentElement = A[j - 1][currentElement - 1];
    }
  }

  return currentElement;
}

// 結果出力
console.log(combineElements(N, A));
