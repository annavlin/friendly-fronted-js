'use strict';

const obj1 = { name: 'Александр' };
// const obj2 = Object.assign({}, obj1);
const obj2 = { ...obj1 }; //то же самое значение

for (const key in obj1) {
  obj2[key] = obj1[key];
}

obj2.name = 'Максим';

console.log('obj1:', obj1);
console.log('obj2:', obj2);
