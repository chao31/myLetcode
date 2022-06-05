"use strict";

function parseToMoney(num) {
  return String(num).split('').reverse().reduce(function (pre, curr, index) {
    return pre + curr + (index % 3 === 2 ? ',' : '');
  }).split('').reverse().join('');
}

console.log(parseToMoney(123456789));