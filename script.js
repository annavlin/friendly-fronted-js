const buttonElement = document.getElementById('myButton');
console.log('buttonElement:', buttonElement);

// можно найти элемент другим способом
console.log('Кнопка:', myButton); // не очень хорошая практика из-за того, что легко получить ошибку в коде

// Если не указан id

const buttonElement1 = document.querySelector('button');
const buttonElement2 = document.querySelector('#myButton'); // если был бы задан id
const buttonElement3 = document.querySelector('.my-button'); // если был бы задан class

console.log('Кнопка:', buttonElement1);

// Если нужно получить доступ не к одному элементу, а к нескольким querySelector не подойдет

const listItemElements = document.querySelectorAll('.list .item');
console.log('Элементы списка:', listItemElements);

listItemElements.forEach((element) => {
  console.log('Элемент списка:', element);
});

// Мы можем использовать querySelector и querySelectorAll у любых DOM - элементов

const wrapperElement = document.querySelector('#wrapper');
console.log('wrapperElement:', wrapperElement);

const listElement = wrapperElement?.querySelector('.list');
console.log('listElement:', listElement);

const listItemElements1 = listElement?.querySelectorAll('.item');
console.log('listItemElements1:', listItemElements1);

// Нахождение ближайшего родительского элемента по селектору - метод closet

const thirdBoxElement = document.querySelector('.box-3');

const firstBoxElement = thirdBoxElement.closest('.box-1'); // применяется при обработке и делегировании событий
console.log('firstBoxElement:', firstBoxElement);

const boxElements = document.querySelectorAll('.box-1, .box-2, .box-3');
console.log('boxElements:', boxElements);

// лучше всего обращаться по селектору класса, но лучше обращаться к data- атрибуту (data-js-имя компонента)

const sliderElement = document.querySelector('[data-js-slider]');
const sliderListElement = document.querySelector('[data-js-slider-list]');
const sliderSlideElement = document.querySelectorAll('[data-js-slider-slide]');
