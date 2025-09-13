// КЛАСС- многофункциональрый шаблон для создания обьектов, он позволяет один раз задать правило, по которым будут работать все обьекты, созданные с помощью этого класса.
// Позволяют структурировать код и реализовывать гибкие и сложные связи в коде

class Student {
  planet = 'Земля';
  country = 'Россия';
  region;

  constructor(name, age, hasExperience) {
    // обязательно выполняется при создании класса
    this.name = name;
    this.age = age;
    this.experience = hasExperience;
  }

  logAge() {
    console.log(this.age);
  }

  logName() {
    console.log(this.name);
  }

  isAdult() {
    return this.age >= 18;
  }

  isReadyToWork() {
    return this.hasExperience;
  }
}

const firstStudent = new Student('Вася', 25); // образовали первый класс
const secondStudent = new Student('Петя', 18); // второй класс, оба этих класса - экземпляры класс Студент

console.log('firstStudent:', firstStudent);
console.log('secondStudent:', secondStudent);

console.log('Имя первого студента:', firstStudent.name);
console.log('Имя второго студента:', secondStudent.name);

console.log(firstStudent);

firstStudent.logAge();
secondStudent.logAge();
