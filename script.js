const formElement = document.querySelector('.form');
const loginInputElement = document.querySelector('.form__input[name="login"]');
const passwordInputElement = document.querySelector(
  '.form__input[name="password"]'
);
const submitButtonElement = document.querySelector('.form__button');

console.dir(formElement);
console.dir(loginInputElement);
console.dir(passwordInputElement);
console.dir(submitButtonElement);

// для получения значения любого атрибута элемента есть метод getAribute

// установим setAttribute

formElement.setAttribute('qwerty', '0');
formElement.setAttribute('data-some-value', '1'); // в качестве атрибутов могут быть только строки

console.log('formElement qwerty:', formElement.getAttribute('qwerty'));
console.log(
  'formElement data-some-value:',
  formElement.getAttribute('data-some-value')
);

// чтобы совсем удалить атрибут, нужно воспользоваться remove

formElement.removeAttribute('qwerty');
formElement.removeAttribute('data-some-value');

console.log('formElement qwerty:', formElement.getAttribute('qwerty'));
console.log(
  'formElement data-some-value:',
  formElement.getAttribute('data-some-value')
);

// hasAttribute- позволяет проверить существует ли определенный атрибут у элемента

console.log('formElement has qwerty:', formElement.hasAttribute('qwerty'));

console.log(
  'formElement has data-some-value:',
  formElement.hasAttribute('data-some-value')
);

// value у полей ввода синхронизируются только в одну сторону. Лучше не манипулировать value четез get и set атрибуты

console.log('Атрибуты loginInputElement:', loginInputElement.attributes); // показывает все атрибуты у элемента

const sliderElement = document.querySelector('[data-js-slider]');
console.log(sliderElement.getAttribute('data-js-slider'));
