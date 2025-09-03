'use strict';

// ОБЬЕДИНЕНИЕ ОБЬЕКТОВ (Поверхностное)

const obj1 = { name: 'Александр' };

const obj2 = {
  age: 28,
  address: {
    city: 'Москва',
  },
};

const obj3 = {
  name: 'Максим',
  isDeveloper: true,
  address: {
    zipcode: 123456,
  },
};

const user = { ...obj1, ...obj2, ...obj3 };

console.log('user:', user);

//При обьединении нескольких обьектов с разными значениями (в нашем случае address), общее звено беерт значения последнего обьекта, потом будем проходить более глубокий разбор
