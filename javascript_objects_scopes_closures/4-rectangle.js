#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (
      !Number.isInteger(w) ||
      !Number.isInteger(h) ||
      w <= 0 ||
      h <= 0
    ) {
      return {};
    }

    this.width = w;
    this.height = h;
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }

  rotate () {
    let a = this.height;
    let b = this.width;

    const temp = a;

    a = b;
    b = temp;

    this.height = a;
    this.width = b;
  }

  double () {
    this.height *= 2;
    this.width *= 2;
  }
}

module.exports = Rectangle;
