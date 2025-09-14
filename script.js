// Отложенное выполнение кода (всплывающие окна и тд) setTimeout

const logMessage = (name, age) => {
  alert(`Привет, меня зовут ${name}, мне ${age}`);
};

const timerID = setTimeout(logMessage, 2000, 'Вася', 21); // второй аргумент это время в милисекундах

// Если мы хотим преждевременно отменить действия setTimeout, то понадобится специальная фнкция clearTimeout

clearTimeout(timerID);

// Если нужно повторять код регулярно/постоянно (например, раз в 1 сек)

const intervalID = setInterval(() => {
  console.log('Привет!');
}, 1000);

// Отменить регулярное использование кода

clearInterval(intervalID);

console.log('Сообщение №1');
setTimeout(() => {
  console.log('Сообщение №2 с задержкой 0 (?) миллисекунд');
});
console.log('Сообщение №3');
// нсачала выведется №1 , потом №3, а потом уже №2
