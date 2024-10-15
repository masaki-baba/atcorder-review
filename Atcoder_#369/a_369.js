const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const [A, B] = input.split(' ').map(Number);

if (A === B) {
  console.log(1);
} else if ((A + B) % 2 === 0) {
  console.log(3);
} else {
  console.log(2);
}
