const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// 世帯N、出生数M
const [N, M] = input[0].split(' ').map(Number);

// 各家の長男が既に生まれたかどうかを記録する配列
const hasFirstSon = Array(N).fill(false);

// 出力結果を格納する配列
const result = [];

// 各赤ちゃんの情報を処理
for (let i = 1; i <= M; i++) {
  // i番目の赤ちゃんの情報を取得
  const [A, B] = input[i].split(' ');

  // Aは赤ちゃんが生まれた家の番号
  const house = Number(A) - 1;
  const gender = B;

  if (gender === 'M') {
    // 男の子の場合、まだ長男が生まれていないなら「太郎」
    if (!hasFirstSon[house]) {
      result.push('Yes');
      hasFirstSon[house] = true;
    } else {
      result.push('No');
    }
  } else {
    // 女の子はNo
    result.push('No');
  }
}

// 結果を出力
console.log(result.join('\n'));
