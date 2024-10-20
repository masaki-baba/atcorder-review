const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = parseInt(input[0]);
const points = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push({ x, y });
}

function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

let totalCost = 0;

totalCost += calcDistance(0, 0, points[0].x, points[0].y);

for (let i = 0; i < N - 1; i++) {
  totalCost += calcDistance(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
}

totalCost += calcDistance(points[N - 1].x, points[N - 1].y, 0, 0);

console.log(totalCost);
