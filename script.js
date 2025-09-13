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
  constructor(name, age, experience) {
    super(name, age); // вызывает конструктор родительского класса
    this.experience = experience;
  }
  writeCode() {
    console.log('Пишу код...');
  }
  sleep() {
    console.log('Не хочу спать, пойду еще попишу код...');
    this.writeCode;
  }
}

const developerExample = new Developer('Миша', 25, 5);

console.log('Количество лет опыта:', developerExample.experience);

// С помощью классов можно писать чистый и структурированный код, решаем множетсво задач, которые можно поделить на конкретные группы, привязатть к конкретной группе и тд. Помогают чуть лучше ориентироваться в коде
