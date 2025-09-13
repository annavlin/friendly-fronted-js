//ГЕТТЕР- специальный метод для получения какого-то свойства
// СЕТТЕР- для установки методу свойство
// Нужны для добавления кастомной логики

class Student {
  #city = null;
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.#someSecretAction(); // если свойство или метод в наале своего имени имеет символ подчеркивания, то использовать его ВНЕ тела или класса не стоит
  }

  set city(value) {
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();

    this.#city = `${firstLetter}${fromSecondLetter}`; // нижнее подчеркивание выделяют свойства и методы, предназначенные для использования только в рамках обьекта или класса. Этот символ буквально обозначает, что сущность относится к внутренней механике класса и обращаться извне этого класса обращаться не стоит
  } // СЕТТЕР

  get city() {
    return `г. ${this.#city}`;
  } // ГЕТТЕР

  #someSecretAction() {}
}

const firsStudent = new Student('Вася', 25);

firsStudent.city = 'москва'; // под капотом буквально произошел СЕТТЕР

console.log(firsStudent.city); // под капотом произошел ГЕТТЕР
// console.log(firsStudent.#city); // под капотом произошел ГЕТТЕР
// # - использует как более деликатное прописание нижнего подчеркивания, при выведении в консоль выдает ошибку, что информация приватная. Если надо что-то спрятать под каптом, пишем # и JS будет считать эту информацию приватной и не даст использовать ее извне

class Student1 {
  country = 'Россия';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logAge() {
    console.log(this.age);
  }
}

const firstStudent1 = new Student1('Вася', 25);
console.log('Страна:', firstStudent1.country);
firstStudent1.logAge();

// НАСЛЕДОВАНИЕ (extends)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('Ем...');
  }
  sleep() {
    console.log('Сплю...');
  }
}

const examplePerson = new Person('Василий', 30);

class Developer extends Person {
  writeCode() {
    console.log('Пишу код...');
  }
  sleep() {
    console.log('Не хочу спать, пойду еще попишу код...');
    this.writeCode;
  }
}

class JavaScriptDeveloper extends Developer {
  makeFrontend() {
    console.log('Пишу фронтенд...');
  }

  eat() {
    super.eat(); // позаимтсвовали у родительского класса
    console.log('Смотрю ютуб...');
  }
}

const jsDeveloperExample = new JavaScriptDeveloper('Александр', 28);

jsDeveloperExample.writeCode();
console.log('Имя:', jsDeveloperExample.name);
console.log('Возраст:', jsDeveloperExample.age);
jsDeveloperExample.eat();
jsDeveloperExample.sleep();
jsDeveloperExample.makeFrontend();
