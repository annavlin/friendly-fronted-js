const arr = [
  'Привет',
  100,
  true,
  { name: 'Александр' },
  () => console.log('👋'),
  [1, 2, 3, 4, 5],
];

const names = ['Александр', 'Михаил', 'Василий'];
const ages = [28, 30, 32];
const permissions = [true, false, false, false, true];

console.log(arr[3].name);
arr[4]();
console.log(arr[5][0]);
//  сначала мы обращаемся к элементу массива по номеру индекса, а потом уже к тому, что конкретно интересует

const matrix = [
  //многомерный массив
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][0]);

// массив можно поменять
const arr1 = ['Привет', 100, true];

console.log('arr before:', arr1);

arr1[0] = 'Пока';
arr1[1] = 200;
arr1[2] = false;
arr1[3] = '1000';

console.log('arr after:', arr1);

// Добавление элементов PUSH

const letters = ['А', 'Б', 'В'];
console.log('letters before:', letters);

letters.push('Г', 'Д');
console.log('letters after:', letters);

letters.unshift('Г', 'Д');
console.log('letters after:', letters); //добавляет в начале массива

// Удаление элементов с конца массива и возвращение элемента POP

letters.pop();
console.log('letters after:', letters);

// Удаление элементов с начала массива и возвращение элемента SHIFT
letters.shift();
console.log('letters after:', letters);

// Приведение массива к строке TO STRING, JOIN

const arr2 = ['Привет', 100, true];
console.log(arr2.toString());
console.log(arr2.join());

const message = 'Один, два, три, четрые, пять';
console.log(message.split(', ').join(', '));

const arr3 = ['A', 'B', 'C'];
const arr4 = arr3.slice(); //получаем копию arr3, позволяет вырезать не весь массив, а определенную ее часть

console.debug('arr3:', arr3);
console.log('arr4:', arr4);

const arr5 = arr3.slice(0, 2);
console.log('arr5:', arr5); // A, B

// ОБЬЕДИНЕНИЕ МАССИВОВ

const a = ['A', 'B'];
const b = ['C', 'D'];

const ab = [...a, ...b]; // СПРЕД-оператор
console.log(ab);

const ab1 = a.concat(b); // concat
console.log(ab1);

// СРАВНЕНИЕ МАССИВОВ

const ac = ['A', 'B'];
const bd = ['A', 'B'];

const abEqual = (acer, bder) => {
  if (acer.length !== bder.length) {
    return false;
  }
  for (let i = 0; i < acer.length; i++) {
    const value1 = acer[i];
    const value2 = bder[i];

    const areValuesArrays = Array.isArray(value1) && Array.isArray(value2);

    if (areValuesArrays) {
      if (!abEqual(value1, value2)) {
        return false;
      } else {
        continue;
      }
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

console.log(abEqual(ac, bd)); // true
