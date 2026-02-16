#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters; // array of URLs

  characters.forEach(charUrl => {
    request.get(charUrl, (err, resp, charBody) => {
      if (err) {
        console.log(err);
        return;
      }

      const character = JSON.parse(charBody);
      console.log(character.name);
    });
  });
});
