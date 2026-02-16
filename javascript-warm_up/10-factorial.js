#!/usr/bin/node

const x = parseInt(process.argv[2]);

function factorial (x) {
  if (Number.isNaN(x) || x <= 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(x));
