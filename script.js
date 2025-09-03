'use strict';

// 🔧 Способы поверхностного копирования
// 1. Spread оператор (...)
javascript;
const original = { name: 'John', age: 30, hobbies: ['reading', 'sports'] };
const copy = { ...original };

console.log(copy); // { name: 'John', age: 30, hobbies: ['reading', 'sports'] }
console.log(original === copy); // false
console.log(original.hobbies === copy.hobbies); // true! (проблема)
// 2. Object.assign()
javascript;
const original = { name: 'John', age: 30 };
const copy = Object.assign({}, original);

console.log(copy); // { name: 'John', age: 30 }
console.log(original === copy); // false
// 3. Цикл for...in
javascript;
const original = { name: 'John', age: 30 };
const copy = {};

for (let key in original) {
  if (original.hasOwnProperty(key)) {
    copy[key] = original[key];
  }
}
