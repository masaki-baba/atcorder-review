// 入力用
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const [L, R] = input.split(' ').map(Number);

// メイン処理
function solve(L, R) {
  if (L === 1 && R === 0) {
    return "Yes";  // 左手
  } else if (L === 0 && R === 1) {
    return "No";   // 右手
  } else if (L === 1 && R === 1) {
    return "Invalid";  // 両手
  } else if (L === 0 && R === 0) {
    return "Invalid";  // 両手を挙げていない
  }
}

// 出力用
console.log(solve(L, R));
