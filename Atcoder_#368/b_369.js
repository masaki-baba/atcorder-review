const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0]);
let A = input[1].split(' ').map(Number);

let operations = 0;

while (A.filter(x => x > 0).length > 1) {
    A.sort((a, b) => b - a);
    A[0]--;
    A[1]--;
    operations++;
}

console.log(operations);
