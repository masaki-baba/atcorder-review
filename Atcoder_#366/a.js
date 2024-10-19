
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const Y = Number(input);

function daysInYear(Y) {
  if (Y % 400 === 0) {
    return 366;
  }
  if (Y % 100 === 0) {
    return 365;
  }
  if (Y % 4 === 0) {
    return 366;
  }
  return 365;
}

console.log(daysInYear(Y));
