const user = {
  name: 'Александр',
  age: 28,
  city: 'Москва',
};

// Цикл FOR IN для перебора

for (const key in user) {
  console.log('Имя свойства:', key);
  console.log('Значение свойства:', user[key]);
}

//Имя свойства: name
//  Значение свойства: Александр
//  Имя свойства: age
//  Значение свойства: 28
//  Имя свойства: city
//  Значение свойства: Москва

// Из обьекта можем получить массив ключей

const userKeys = Object.keys(user);
console.log('userKeys:', userKeys);

// userKeys: (3) ['name', 'age', 'city']

userKeys.forEach((key) => {
  console.log('Имя свойства:', key);
});

// Имя свойства: name
//  Имя свойства: age
//  Имя свойства: city

// Получаем массив его значений

const userValues = Object.values(user);
console.log('userValues:', userValues);

// userValues: (3) ['Александр', 28, 'Москва']

userValues.forEach((value) => {
  console.log('Значение свойства:', value);
});

// Значение свойства: Александр
// Значение свойства: 28
// Значение свойства: Москва

// Получаем обьекты в виде массива

const userEntries = Object.entries(user);
console.log('userEntries', userEntries);

// userEntries (3) [Array(2), Array(2), Array(2)]

// Также можно перебрать используя forEach

userEntries.forEach((userEntry) => {
  const key = userEntry[0];
  const value = userEntry[1];

  console.log('Имя свойства:', key);
  console.log('Значение свойства:', value);
});

//Имя свойства: name
//  Значение свойства: Александр
//  Имя свойства: age
//  Значение свойства: 28
//  Имя свойства: city
//  Значение свойства: Москва

// MAP

const userEntries1 = Object.entries(user);

const userEntriesFormatted = userEntries1.map(([key, value]) => {
  return [key.toUpperCase(), `~~${value}~~`];
});

console.log('userEntriesFormatted:', userEntriesFormatted);

// 0 : (2) ['NAME', '~~Александр~~']
// 1 : (2) ['AGE', '~~28~~']
// 2 : (2) ['CITY', '~~Москва~~']
// length : 3

// Если нам нужно получить из такого (в комментариях выше) обратное, нужно FROMENTRIES

const userFormatted = Object.fromEntries(userEntriesFormatted);
console.log('userFormatted:', userFormatted);

// MAP

//  с помощью SET добавляем элемент в коллекцию
const data = new Map();
data.set(1, 'Один как число'), data.set('1', 'Один как строка');
console.log(data.get(1));
console.log(data.get('1'));

// Один как число
// Один как строка

// если хотим узнать если в коллекции элемент по определеннму ключу HAS

console.log(data.has('name')); // false

// но если было бы
data.set('name', undefined); // true

// Удаляет элемент DELETE точечно
data.delete('name'); // false

// Удаляет всю коллекцию целиком CLEAR

data.clear();

// SIZE - возвращает число/ размер

console.log(data.size);

// FOR OF при MAP

data.set('name', 'Александр');
data.set('age', 28);

for (const key of data.keys()) {
  console.log('key:', key);
}

for (const value of data.values()) {
  console.log('value:', value);
}

for (const entry of data.entries()) {
  console.log('entry:', entry);
}

// SET - коллекция, которая хранит только значения ( каждое значение может быть только в единственном экземпляре)

const set = new Set([1, 2, 3, 2, 3]);
console.log(set);
