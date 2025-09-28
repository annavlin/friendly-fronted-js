// const logMessage = () => {
//   console.log('Произошел клик');
// };

const buttonElement = document.querySelector('button');
buttonElement.onclick = () => {
  console.log('Произошел клик');
};

// или же можно записать немного по-другому

const logMessage = () => {
  console.log('Произошел клик');
};

buttonElement.onclick = logMessage;
// у этих двух вариантах есть минус- нельзя повесить на один элемент несколько обработчиков одного события

// самый правильный и удобный вариант ( можно повесить несколько действий на один элеемнтов, и это все будет работать корректно)

buttonElement.addEventListener('click', () => {
  console.log(1);
});

buttonElement.addEventListener('click', () => {
  console.log(2);
});

// в некоторых случаях можно делать так =>

const logNumberOne = () => {
  console.log(1);
};

buttonElement.addEventListener('click', logNumberOne);

const firstButtonElement = document.querySelector('.button-1');

const logMessage1 = () => {
  console.log('Произошел клик');
};

firstButtonElement.addEventListener('click', logMessage1);

const secondButtonElement = document.querySelector('.button-2');

secondButtonElement.addEventListener('click', () => {
  firstButtonElement.removeEventListener('click', logMessage1);
});

// target- показывает в каком дом- элементе произошло событие
