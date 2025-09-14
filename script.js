// Как словить ошибки в написании кода

console.log('Начало кода...');

try {
  // пробуем выполнить код
} catch (error) {
  // обрабатываем возникшую ошибку
}

console.log('Конец кода...');

// может выловить ошибку только в нормально написанном коде и не в отложенном коде

// throw- генерация кастомной ошибки

try {
  const userJSON = `{
"age": 28
}`;

  const user = JSON.parse(userJSON);
  const { name, age } = user;

  if (!name) {
    throw 'Имя не заполнено';

    // каждая из них отвечает за разные типы ошибок, но в основном используется Error
    throw new Error(errorMessage);
    throw new TypeError(errorMessage);
    throw new SyntaxError(errorMessage);
    throw new RangeError(errorMessage);
  }

  console.log(`
  Привет, ${name}!
  Твой возраст - ${age}, верно?
  `);
} catch (error) {
  console.log('Возникла ошибка:', error);
  console.log('name', error.name);
  console.log('message', error.message);
  console.log('stack', error.stack);
}

console.log('Конец года...');

try {
  // пытаемся выполнить код
} catch (error) {
  // обрабатываем возникшую ошибку
} finally {
  // выполняем при любом раскладе, выполняется строго последним
}
