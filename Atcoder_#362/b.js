const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T, P] = input[0].split(' ').map(Number);
let L = input[1].split(' ').map(Number);
let count = L.filter(length => length >= T).length;

if (count >= P) {
  console.log(0);
} else {
  let days = 0;
  while (count < P) {
    days++;
    L = L.map(length => length + 1);
    count = L.filter(length => length >= T).length;
  }
  console.log(days);
}
