const firstBoxElement = document.querySelector('.box-1');
const secondBoxElement = document.querySelector('.box-2');
const thirdBoxElement = document.querySelector('.box-3');

firstBoxElement.addEventListener('click', (event) => {
  console.log('Клик по box-1', event.target, event.currentTarget);
});

secondBoxElement.addEventListener('click', (event) => {
  console.log('Клик по box-2', event.target, event.currentTarget);
});

thirdBoxElement.addEventListener('click', (event) => {
  console.log('Клик по box-3', event.target, event.currentTarget);
});

// альтернативная запись event, event.target, event.currentTarget

firstBoxElement.addEventListener('click', function () {
  console.log('Клик по box-1', this);
});

secondBoxElement.addEventListener(
  'click',
  function () {
    console.log('Клик по box-2', this);
  },
  true
);

thirdBoxElement.addEventListener('click', function () {
  console.log('Клик по box-3', this);
});

//  Концепция ' Всплытие события '- происходит с целевого самого глубокого элемента вверх от корневой точки дом-дерева до самого document. Иногда требуется перехватитть определенное действие на каком-то этапе и отменить его дальнейшее всплытие.

thirdBoxElement.addEventListener('click', (event) => {
  console.log('Клик по box-3'), event.stopImediatePropagation();
});

// похожий метод (stopImediatePropagation (смотреть выше)) - по идее остальные методы где еще одни всплывы не должны сработать, только 'клик по box-3'

thirdBoxElement.addEventListener('click', () => {
  console.log('Еще один клик по box-3');
});

thirdBoxElement.addEventListener('click', () => {
  console.log('И еще один клик по box-3');
});

/// лялялял
