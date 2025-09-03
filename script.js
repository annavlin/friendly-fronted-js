'use strict';

const user = {
  name: 'Александр',
  age: 28,
  address: {
    city: 'Москва',
    zipcode: 123456,
  },
};

// console.log(user.address.city);
console.log(user.address?.city); // с оператором optional chaning
console.log('Какой-то текст');

const guest1 = {
  name: 'Василий',
  age: 30,
  orderInfo: {
    roomType: 2,
    stayDates: {
      from: '14.04.2024',
      to: '21.04.2024',
    },
  },
};

const guest2 = {
  name: 'Екатерина',
  age: 25,
};

// const logGuestInfo = (guest) => {
//   const checkoutDate =
//     guest.orderInfo && guest.orderInfo.stayDates && guest.orderInfo.stayDates.to
//       ? guest.orderInfo.stayDates.to
//       : null;

//   console.log(`
//         Имя: ${guest.name}
//         Возраст: ${guest.age}
//         Дата выезда: ${checkoutDate},
//         `);
// };

//Более короткий вариант
const logGuestInfo = (guest) => {
  console.log(`
        Имя: ${guest.name}
       Возраст: ${guest.age}
        Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'},
        `);
};

logGuestInfo(guest1);
logGuestInfo(guest2);
