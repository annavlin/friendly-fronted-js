'use strict';

const user = {
  name: 'Александр',
  age: 28,
  isDeveloper: true,
};

// const name = user.name;
// const age = user.age;
// const isDeveloper = user.isDeveloper;

//для упрощения
const { name, age, isDeveloper } = user;

console.log('name:', name);
console.log('age:', age);
console.log('isDeveloper:', isDeveloper);
