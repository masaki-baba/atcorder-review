const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(' ').map(Number);


const sortedA = [...A].sort((a, b) => b - a);
const secondLargest = sortedA[1];
const index = A.indexOf(secondLargest) + 1;

console.log(index);
