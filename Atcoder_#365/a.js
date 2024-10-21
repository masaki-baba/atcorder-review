const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const R = parseInt(input); // 現在のレートを数値として取得

let requiredIncrease = 0;

if (R <= 99) {
  requiredIncrease = 100 - R;
} else if (R <= 199) {
  requiredIncrease = 200 - R;
} else if (R <= 299) {
  requiredIncrease = 300 - R;
}

console.log(requiredIncrease);
