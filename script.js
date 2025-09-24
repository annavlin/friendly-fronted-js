const boxElement = document.querySelector('.box');

console.log('Полная ширина:', boxElement.offsetWidth);
console.log('Полная высота:', boxElement.offsetHeight);

console.log('Ширина левой рамки:', boxElement.clientLeft);
console.log('Ширина верхней рамки:', boxElement.clientTop);

console.log(
  'Расстояние от левой границы элемента до внутренностей:',
  boxElement.clientLeft
);

console.log(
  'Расстояние от верхней границы элемента до внутренностей:',
  boxElement.clientTop
);

console.log('Ширина без учета рамки и скроллбара:', boxElement.clientWidth);

console.log('Высота без учета рамки и скроллбара:', boxElement.clientHeight);

console.log(
  'Ширина без учета рамки, включая прокручиваемую область: ',
  boxElement.scrollWidth
);

console.log(
  'Высота без учета рамки, включая прокручиваемую область: ',
  boxElement.scrollHeight
);

console.log(
  'Возможна горизонтальная прокрутка:',
  boxElement.scrollWidth > boxElement.clientWidth
);

console.log(
  'Возможна вертикальная прокрутка:',
  boxElement.scrollHeight > boxElement.clientHeight
);

boxElement.scroll(10, 50); // Прокрутка содержимого элемента на 10 px вправо и 50 px вниз относительно начального положения

console.log(
  'Ширина невидимой уже прокрученной по горизонтали области: ',
  boxElement.scrollLeft
);

console.log(
  'Высота невидимой уже прокрученной по вертикали области: ',
  boxElement.scrollTop
);

// получаем координаты различных элементо относительно окна браузера с помощью getBoundingClientRect()

// Координаты позиции скролла страницы - window.scrollX, window.scrollY
