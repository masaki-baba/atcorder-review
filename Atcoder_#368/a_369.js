// 入力
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number); // N, K の取得
let cards = input[1].split(' ').map(Number); // カードの配列の取得

// メイン
const removedCards = cards.splice(N - K, K); // 下からK枚取り出し
cards = removedCards.concat(cards); // 取り出したカードを山の先頭に追加

// 結果
console.log(cards.join(' '));
