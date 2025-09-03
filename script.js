const calculator = {
  read() {
    this.a = Number(prompt('Введите первое число:', 0));
    this.b = Number(prompt('Введите второе число:', 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log('calculator', calculator);
console.log('Сумма:', calculator.sum());
console.log('Произведение:', calculator.mul());
