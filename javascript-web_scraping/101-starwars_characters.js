#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Wrap request in a Promise to use async/await
function fetch (url) {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

async function printCharacters () {
  try {
    const movie = await fetch(url);
    const characters = movie.characters; // array of URLs

    // Fetch each character in sequence to preserve order
    for (const charUrl of characters) {
      const character = await fetch(charUrl);
      console.log(character.name);
    }
  } catch (err) {
    console.log(err);
  }
}

printCharacters();
