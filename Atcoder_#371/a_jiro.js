// 入力用
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const [Sab, Sac, Sbc] = input.split(' ');

// メイン処理
function findMiddle(Sab, Sac, Sbc) {
  if (Sab === "<" && Sac === "<") {
    if (Sbc === "<") {
      return "B"; // A < B < C
    } else {
      return "C"; // A < C < B
    }
  } else if (Sab === "<" && Sac === ">") {
    return "A"; // C < A < B
  } else if (Sab === ">" && Sac === "<") {
    return "A"; // B < A < C
  } else if (Sab === ">" && Sac === ">") {
    if (Sbc === "<") {
      return "C"; // B < C < A
    } else {
      return "B"; // C < B < A
    }
  }
}

// 出力用
console.log(findMiddle(Sab, Sac, Sbc));
