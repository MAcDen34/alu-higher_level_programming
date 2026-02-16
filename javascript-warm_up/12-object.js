#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

myObject.value = 89;

console.log(myObject);

// function deepFreeze (obj) {
//     Object.freeze(obj);

//     Object.keys(obj).forEach(key => {
//         if (obj[key] !== null && typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
//             deepFreeze(obj[key])
//         }
//     })

//     return obj;
// }
