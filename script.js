/**
 * BOM (Browser Object Model) - обьектная модель браузера, в рамках которой мы получаем возможность пользоваться специальными обьектами
 */

console.log('Информация о браузере:', window.navigator);
console.log('Информация об экране:', window.screen);
console.log('Информация о URL:', window.location);
console.log('Информация об истории текущей сессии:', window.history);

/* Сохранить данные в LocalStorage */
window.localStorage.setItem('id', JSON.stringify({ id: 123 }));

const id = JSON.parse(
  /* Получить данные из LocalStorage */
  window.localStorage.getItem('key-name')
);

/* Отправка на сервер GET-запроса и получение ответа */
window
  .fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => console.log('Пользователи:', users));

/* DOM (Document Object Model) - обьектная модель документа, которая позволяет взаимодействовать с содержимым страницы в виде обьектов */
console.log(window.document);
console.dir(window.document);

/* Все браузерное окружение */
console.log(window);

/* Основной JavaScript */
console.log(window.Math);
console.log(window.Object.keys({ name: 'Александр', age: 28 }));
console.log(window.Number('123'));
console.log(window.Boolean(0));

/* BOM */
console.log(window.navigator);
console.log(window.screen);
console.log(window.location);
console.log(window.history);
console.log(window.frames);
console.log(window.fetch);
console.log(window.XMLHttpRequest);

/* DOM */
console.log(window.document);
