'use strict';

// const year = 2024;

// if (year === 2024) {
//   console.log('Ура!');
// } else if (year === 3000) {
//   console.log('Слишком поздно. Нейросеть заменила человечество :(');
// } else {
//   console.log('Неизвестный год :/');
// }

const obj1 = {
  name: 'Александр',
  age: 28,
};

const obj2 = {
  name: 'Александр',
  age: 28,
};

const areObjectsEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  console.log('keys1:', keys1.length);
  console.log('keys2:', keys2.length);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const areValuesObjects =
      typeof value1 === 'object' && typeof value2 === 'object';

    if (areValuesObjects) {
      return areObjectsEqual(value1, value2);
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

console.log('Равны ли обьекты obj1 и obj2:', areObjectsEqual(obj1, obj2));
