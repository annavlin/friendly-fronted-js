'use strict';

const logAddress = (city, street, houseNumber, apartmentNumber) => {
  console.log(`
        Адрес:
        г.${city}, ул.${street},
        д.${houseNumber}, кв.${apartmentNumber}`);
};

logAddress('Москва', 'Пушкина', 21, 35);

const logAddress2 = ({ city, street, houseNumber, apartmentNumber }) => {
  console.log(`
       Адрес:
       г. ${city}, ул. ${street},
        д. ${houseNumber}, кв. ${apartmentNumber}
    `);
};

logAddress2({
  city: 'Москва',
  street: 'Пушкина',
  houseNumber: 21,
  apartmentNumber: 35,
});
