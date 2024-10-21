// 標準入力からデータを取得
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// 1行目のデータを取得 (N, T, P)
const [N, T, P] = input[0].split(' ').map(Number);

// 2行目の髪の長さデータを取得 (L_i)
let L = input[1].split(' ').map(Number);

// 初日に髪の長さが T 以上の人数をカウント
let count = L.filter(length => length >= T).length;

// すでに T 以上の人が P 人以上なら 0 を出力
if (count >= P) {
  console.log(0);
} else {
  // それ以外の場合、毎日髪の長さを増やしてシミュレーション
  let days = 0;
  while (count < P) {
    days++;
    // 1日経過で全員の髪の長さを1増やす
    L = L.map(length => length + 1);
    // T 以上の人数を再カウント
    count = L.filter(length => length >= T).length;
  }
  // 結果として日数を出力
  console.log(days);
}
