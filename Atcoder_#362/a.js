const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const riceIndex = input.indexOf('R');
const misoIndex = input.indexOf('M');

if (riceIndex < misoIndex) {
    console.log("Yes");
} else {
    console.log("No");
}
