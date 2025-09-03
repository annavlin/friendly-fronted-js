// 'use strict';

// const user = {
//   name: 'Александр',
//   age: 28,
//   logThis() {
//     console.log('this в теле метода обьекта user:', this);
//   },
// };

// user.logThis();

const user1 = { name: 'Миша' };
const user2 = { name: 'Вася' };

function logInfo() {
  console.log('this:', this);
  console.log('this.name:', this.name);
}
logInfo();

user1.logName = logInfo;
user2.logName = logInfo;

user1.logName();
user2.logName();
