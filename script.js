const boxElement = document.querySelector('.box');

// console.log('Текстовое содержимое boxElement:', boxElement.textContent);

// textContent- омжем получать информацию по контексту содержимого, не позволяет вставить HTML- разметку, в этом случае можно использовать innerHTML (всегда заменяет внутренности на новые, даже если используем +=)

// boxElement.innerHTML = `Обновленный текст <p> Новый параграф <p>`;

// outerHTML - с помощью этого свойства можно получить строку с разметкой элементов, включая сам элемент
const firstBoxElement = document.querySelector('.box-1');
const secondBoxElement = document.querySelector('.box-2');

// const thirdParagraphElement = document.querySelector('./paragraph-3');
// const fourthParagraphElement = document.querySelector('./paragraph-4');
// const fifthParagraphElement = document.querySelector('./paragraph-5');

const justText = 'Просто текст';
// создаем элемент
const getNewParagraphElement = () => {
  const newParagraphElement = document.createElement('p');
  newParagraphElement.textContent = 'Новый параграф';
  return newParagraphElement;
};

// const boxElement = document.querySelector('.box');
const getNewArticleElement = () => {
  const newArticleElement = document.createElement('article');
  newArticleElement.textContent = 'Новый элемент <article>';
  return newArticleElement;
};
firstBoxElement.append(getNewParagraphElement(), getNewArticleElement());
// если надо добавить в начало, воспользуемся prepend

secondBoxElement.prepend(getNewParagraphElement(), getNewArticleElement());

// еще есть before и after, работают также как и append, prepend

// чтобы поменять информацию

// thirdBoxElement.replaceWith(getNewParagraphElement(), getNewArticleElement());

// удалить элемент из дом-дерева с помощью remove
firstBoxElement.remove();

// клонирование какого-либо элемента
const secondBoxElementClone = secondBoxElement.cloneNode(true);
secondBoxElement.after(secondBoxElementClone); // поверхностное клонирование, которое не учитывает внутреннее содержимое

// чтобы произошло глубокое клонирование, нужно передать true в cloneNode

// чтобы перемещать можно пользоваться before, after, либо же альтернативой inserAdjacentElement
