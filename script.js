// Event Loop - отвечает за последовательность выполнения кода, в частности за выполнение асинхронных задач. Создает очередь в которую добавляются все ассинхронные задачи

// Синхронный код, выполняющийся сразу
console.log('Начало программы');

// Асихронная операция с использованием setTimeout
setTimeout(() => {
  console.log('Асихронная задача выполнена');
}, 2000); // Задержка в 2 секунды

// Синхронный код, выполняющийся сразу
console.log('Конец программы');

setTimeout(() => {
  console.log('Привет!');
}, 5000);

const makeRequest = (url, onSuccess) => {};
const sellerId = 154;

makeRequest(`/api/sellers/${sellerId}`, (seller) => {
  const firstProductId = seller.productIds[0];

  makeRequest(`/api/products/${firstProductId}`, (product) => {
    const firstReviewId = product.reviewsIds[0];

    makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
      const authorName = review.author.name;
    });
  });
});

// Чтобы не писать такой сложный код, его можно записать с помощью promise. Ассихронные функции возращает promise в качесвте результата.

// PROMISE- спецальный обьект-надстройка для работы с ассихронным кодом
// Имеет 3 состояния:
//  pending - ожидание, исходное состояние
// fulfilled - выполнено успешно, получен результат
// reJected - выполнено с ошибкой

/**
 * Основные методы PROMISE:
 * then() - обрабатывает fulfilled состояние
 * catch() - обрабатывает reJected состояние
 */

const promise = new Promise((fulfill, reject) => {
  console.log('Начало, состояние pending...');

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill('Ура, состояние fulfilled :)');
    } else {
      reject('Увы, состояние reJected :(');
    }
  }, 3000);
});

promise
  .then((successData) => {
    console.log('Успех! Получены данные:', successData);
  })
  .catch((errorData) => {
    console.log('Ошибка. Получены данные:', errorData);
  })
  .finally(() => {
    console.log('Код, выполняющийся в самом конце, независимо от результата'); // выполняется в любом случае, но строго после того, как promise разрешится
  });

// Альтернативный метод использования promise без catch. Такая запись менее очевидна, лучше использовать ту
promise
  .then(
    (successData) => {
      console.log('Успех! Получены данные:', successData);
    },
    (errorData) => {
      console.log('Ошибка. Получены данные:', errorData);
    }
  )
  .finally(() => {
    console.log('Код, выполняющийся в самом конце, независимо от результата'); // выполняется в любом случае, но строго после того, как promise разрешится
  });

const makeRequest1 = (url, onSuccess) => {
  return new Promise((fulfill) => {
    fulfill('Ура, состояние fulfilled');
  });
};
const sellerId1 = 154;

makeRequest1(`/api/sellers/${sellerId}`)
  .then((seller) => {
    const firstProductId = seller.productIds[0];

    return makeRequest1(`/api/products/${firstProductId}`);
  })
  .then((product) => {
    const firstReviewId = product.reviewsIds[0];

    return makeRequest1(`/api/products/${firstProductId}`);
  })
  .then((review) => {
    const authorName = review.author.name;
  })
  .catch((error) => {
    console.log(error);
  });

// Альтернативный синтаксис для асинхонных функций ASYNC/ AWAIT
// ASYNC- добавляется перед функцией и гарантирует что эта функция 100% вернет promise
async function getSomething() {
  return ' Привет!';
}

getSomething().then((something) => {
  console.log(something);
});

//AWAIT- оно нужно для того, чтобы заставить джаву скрипт код заставить выполнение promise, а уже затем продолжить работу. Преимуществ как таковых нет, писать как нравится

async function getSomething() {
  return new Promise((fulfil) => {
    setTimeout(() => {
      fulfil('Привет!');
    }, 3000);
  });
}
console.log('Начало');
const something = await getSomething();
console.log(something);
console.log('Конец');

const makeRequest2 = async (url, onSuccess) => {
  return new Promise((fulfill) => {
    fulfill('Ура, состояние fulfilled');
  });
};
const sellerId2 = 154;
try {
  const seller = await makeRequest2(`/api/sellers/${sellerId}`);
  const firstProductId = seller.productIds[0];
  const product = await makeRequest2(`/api/products/${firstProductId}`);
  const firstReviewId = product.reviewsIds[0];
  const review = await makeRequest2(`/api/reviews/${firstReviewId}`);
  const authorName = review.author.name;
} catch (error) {
  console.log(error);
}
// чтобы отловить ошибку try, catch
