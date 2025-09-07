const numberAsString = '100';

console.log(Number(numberAsString));
// преобразование строки в число
console.log(+numberAsString); // 100

const numberAsString1 = '100px';
// преобразование строки в число, если есть что-то кроме числа после него

console.log(parseInt(numberAsString)); // 100

const numberAsString2 = '100.5px';
// преобразование строки в число, если есть что-то кроме числа и число не целое

console.log(parseFloat(numberAsString)); // 100.5
