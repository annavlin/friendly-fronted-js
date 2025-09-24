const boxElement = document.querySelector('.box');

// boxElement.style.position = 'absolute';
// boxElement.style.top = '40px';
// boxElement.style.left = '80px';
// boxElement.style.borderWidth = '10px';

// полностью переписываем данные

// boxElement.style.cssText = `
// position: absolute;
// top: 40px;
// left: 80px;
// width: 80px;
// border-width: 10px
// `;

// если надо просто добавить, то пишем +=

// boxElement.style.cssText += `
// position: absolute;
// top: 40px;
// left: 80px;
// width: 80px;
// border-width: 2px
// `;

console.dir(boxElement);
console.log(boxElement.style);

// для глобального поиска в window

console.log(
  'Вычисление значения стилей boxElement:',
  getComputedStyle(boxElement).width
);

// можно манипулировать с css элементами с помощью classList

boxElement.classList.add('red', 'big');

// чтобы удалить класс, пользоваться remove

boxElement.classList.remove('red', 'big');

// toggle - добавляет класс если у элемента его не было, удаляет класс у элемента если он есть

boxElement.classList.toggle('red');

// contains - проверяет имеет ли элемент опредеделенный класс и возвращает результат как true или false

console.log(
  'Есть ли класс "bx" у элемента boxElement?',
  boxElement.classList.contains('bx')
);

// Управление CSS-переменными в JS.

boxElement.style.setProperty('--border-color', 'blue'); // использовать только для установки свойств цсс- переменных
