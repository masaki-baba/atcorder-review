function main() {
  const M = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

  const cubed = [];
  
  // 3のべき乗の配列を作成 (3^0 から 3^10 まで)
  for (let i = 0; i <= 10; i++) {
      cubed.push(Math.pow(3, i));
  }

  const A = [];
  let sum = 0;
  let N = 0;

  for (let i = 10; i >= 0; i--) {
      while (sum + cubed[i] <= M) {
          A.push(i);
          sum += cubed[i];
          N++;
      }
      if (sum === M) break;
  }

  console.log(N);
  console.log(A.join(' '));
}

main();
