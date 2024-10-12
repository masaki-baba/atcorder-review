function removeDots(S) {
  return S.replace(/\./g, '');
}

const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(removeDots(S));  
