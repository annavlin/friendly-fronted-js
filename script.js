'use strict';

const user = {
  name: 'Александр',
};

const admin = {
  name: 'Boss',
};

const { name: userName } = user;
const { name: adminName } = admin;

console.log('userName:', userName);
console.log('adminName:', adminName);

const user1 = {
  name: 'Александр',
  age: 28,
  city: 'Москва',
};

const user2 = {
  name: 'Максим',
  age: 5,
};

const { city = 'не указан' } = user2;
console.log('Город:', city);

const user3 = {
  city: 'Москва',
};

const { city: userCity = 'не указано' } = user3;

console.log('userCity:', userCity);
