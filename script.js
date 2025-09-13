// JSON- формат- стандартизированный формат данных в виде JS- фрагментов.
// В качестве значений свойств JSON- обьекта могут быть строки, числа, булевые true, false-значения, null, массивы и обьекты.
// Все строки оязательно оборачиваются в двойные кавычки
// Висячие запятые недопустимы
// Нужно использовать когда надо преобразовать обьект в строку

const user = {
  name: 'Александр',
  age: 28,
  city: 'Москва',
  address: {
    street: 'ул.Пушкина, д.1, кв.1',
    zipcode: 123456,
  },
  todos: ['sleep', 'eat', 'work', 'train', 'learn'],
  hasCat: true,
  yacht: null,
};

const userDataAsString = JSON.stringify(user); // преобразует данные JS- обьекты в JSON- обьекты в виде строки
console.log(userDataAsString); // данные в таком виде можно отправлять на сервер

// Если нужно наоборот преобразовать JSON- обьект в JS- обьект

const parseUserData = JSON.parse(userDataAsString);
console.log(parseUserData);

const user1 = {
  name: 'Александр',
  sayHi() {
    console.log(`Привет, ${this.name}!`);
  },
  car: undefined,
};

const userDataAsString1 = JSON.stringify(user1);
console.log(userDataAsString1); // если в преобразуемом JS- обьекте будут содержаться методы (свойства с функциями значений/ свойства со значаением underfined, то JSON.stringify не будет их учитывать, в результате будет получена только одна строка с одним свойством name )

const arr = ['Александр', 'Михаил', 'Василий'];

console.log(typeof arr);
