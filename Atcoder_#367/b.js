const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const X = parseFloat(input);
console.log(X.toFixed(3).replace(/\.?0+$/, ''));
