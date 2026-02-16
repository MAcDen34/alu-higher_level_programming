#!/usr/bin/node

const args = process.argv.slice(2);

function secondBiggest (args) {
  if (args.length === 0 || args.length === 1) {
    return 0;
  }
  const sortedArray = args.sort((a, b) => b - a);

  return sortedArray[1];
}

console.log(secondBiggest(args));
