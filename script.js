'use strict';

// ОБЬЕДИНЕНИЕ ОБЬЕКТОВ (Поверхностное)

const obj1 = { name: 'Александр' };
const obj2 = { age: 28 };

const user = Object.assign({}, obj1, obj2);

console.log('user:', user);

// Либо же СПРЕД- оператор, также как и при копировании

const user2 = { ...obj1, ...obj2 };
console.log('user2:', user2);
