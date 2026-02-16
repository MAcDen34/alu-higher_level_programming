#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterId = '18';
let count = 0;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const films = data.results;

  films.forEach(film => {
    const characters = film.characters;
    if (characters.some(char => char.includes(`/people/${characterId}/`))) {
      count++;
    }
  });

  console.log(count);
});
