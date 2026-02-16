#!/usr/bin/node

const dict = require('./101-data').dict;
const result = {};

for (const userId in dict) {
  const occurrences = dict[userId];

  if (!result[occurrences]) {
    result[occurrences] = [];
  }

  result[occurrences].push(userId);
}

console.log(result);
