const data = ['Александр', 28];
const [name, age] = data;

console.log('name:', name);
console.log('age:', age);

// ПЕРЕБИРАЕМ ЭЛЕМЕНТЫ МАССИВА FOREACH

const letters = ['A', 'B', 'C', 'D', 'E'];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

/** То же самое, что и ['A', 'B', 'C', 'D', 'E'].forEach(...) */
letters.forEach((letter, index, array) => {
  console.log(`По индексу [${index}] находится элемент "${letter}"`);
  console.log('array:', array);
});

// НАЙТИ ИНДЕКС ЭЛЕМЕНТА МАССИВА INDEXOF

const prices = [100, 200, 444, 500, 444, 777];
console.log(prices.indexOf(444)); // 2

console.log(prices.indexOf(444, 3)); // 4
console.log(prices.lastIndexOf(444)); // 4

const users = [
  {
    name: 'Александр',
    age: 28,
  },
  {
    name: 'Михаил',
    age: 30,
  },
  {
    name: 'Василий',
    age: 40,
  },
];

console.log(
  users.findIndex((user) => {
    if (user.name === 'Василий') {
      return true;
    }
  })
);

console.log(users.findIndex((user) => user.name === 'Василий')); // Укороченная версия предыдущей записи
console.log(users.findLastIndex((user) => user.name === 'Василий')); // Последний индекс

// ПРОВЕРЯЕМ НАЛИЧИЕ ЭЛЕМЕНТА В МАССИВЕ (Все ранее изученные + includes)

const prices1 = [100, 200, 444, 500, 444, 777];
console.log(prices1.indexOf(500) !== -1);
console.log(prices1.lastIndexOf(500) !== -1);
console.log(prices1.findIndex((price) => price === 500) !== -1);
console.log(prices1.findLastIndex((price) => price === 500) !== -1);

//INCLUDES
console.log(prices1.includes(500));
// но с его помощью мы не можем проверить более сложного элемента в массиве

// МЕТОД SOME. с его помощью мы можем проверить более сложного элемента в массиве

const users1 = [
  {
    name: 'Александр',
    age: 28,
  },
  {
    name: 'Михаил',
    age: 30,
  },
  {
    name: 'Василий',
    age: 40,
  },
];

console.log(users1.some((user) => user.name === 'Василий'));

// Возвращает true, если ХОТЯ БЫ ОДИН элемент удовлетворяет условию
console.log(users1.some((user) => user.age >= 18));
// true (все пользователи старше 18)

// EVERY

// Возвращает true, если ВСЕ элементы удовлетворяют условию
console.log(users1.every((user) => user.age >= 18));
// true (все пользователи старше 18)

// НАДО НАЙТИ КОНКРЕТНЫЙ ЭЛЕМЕНТ ПО УСЛОВИЮ !FIND!

console.log(users1.find((user) => user.name === 'Василий'));
// метод Find найдет лишь первый вариант, удовлетворяющий условию

//Если надо найти все варианты !FILTER!
console.log(users1.filter((user) => user.name === 'Василий'));

let users2 = [
  {
    name: 'Александр',
    age: 28,
    city: 'Москва',
  },
  {
    name: 'Михаил',
    age: 30,
    city: 'Екатеринбург',
  },
  {
    name: 'Василий',
    age: 40,
    city: 'Москва',
  },
  {
    name: 'Василий',
    age: 50,
    city: 'Санкт-Петербург',
  },
];

const filteredUsers = users2.filter((city, age) => {
  return city === 'Москва' || age < 45;
});

console.log(filteredUsers);

// Метод MAP - позволяет перебрать исходный массив и преобразовать его, изменив его каждый из элементов

let users3 = users2.map((user) => {
  return `${user.name}, ${user.age} лет, живет в г. ${user.city}`;
});
console.log(users3);
// НЕ МУТИРУЕТ ИСХОДНЫЙ МАССИВ
// Если все-таки хотим изменить первоначальный массив, делаем let, а не const

// Хотим получить средний возраст всех пользователей

let ageSum = 0;

for (let i = 0; i < users2.length; i++) {
  ageSum += users2[i].age;
}

console.log('Средний возраст пользователей:', ageSum / users2.length);

// То же самое можно решить с REDUCE

const ageSum1 = users2.reduce((accumulator, { age }) => accumulator + age, 0);
// accumulator- хранит результат предыдущей функции (изначально там указано 0, что после функции написано), нужен для хранения суммарного возраста пользователей

console.log('Средний возраст пользователей:', ageSum1 / users2.length);

//REDUCERIGHT- делает тоже самое, только перебирает все элемента справа налеко

// REVERSE- переворачивает исходный массив

const reversedUsers = users2.reverse();

console.log(`Массив users2 в обратном порядке:`, reversedUsers);
//МУТИРУЕТ ИСХОДНЫЙ МАССИВ!!!

const reversedUsers2 = [...users2].reverse(); // ДЕЛАЕМ ТАКИМ ОБРАЗОМ, ЕСЛИ НЕ ХОТИМ МУТИРОВАТЬ ИСХОДНЫЙ МАССИВ [...word]

// SORT- сортирует исходный массив, меняя порядок его элементов

const names = ['Василий', 'Александр', 'Максим', 'Андрей'];
const sortedNames = names.sort();

console.log('Отсортированные имена:', sortedNames);
// МУТИРУЕТ ИСХОДНЫЙ МАССИВ!!! ЕСЛИ НЕ ХОТИМ МУТИРОВАТЬ ИСХОДНЫЙ МАССИВ [...word]

const numbers = [8, 4, 500];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('Отсортированные числа:', sortedNumbers);
