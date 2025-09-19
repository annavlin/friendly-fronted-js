console.log('Элемент <body>:', document.body);

console.log('Родительский элемент над <body>:', document.body.parentElement);

console.log(
  'Соседний элемент перед <body>:',
  document.body.previousElementSibling
);

console.log('Соседний элемент после <body>:', document.body.nextElementSibling);

console.log('Дочерние элементы <body>:', document.body.children);

console.log('Элемент <html>:', document.document);

console.log(
  'Родительский элемент над <html>:',
  document.documentElement.parentElement
);

console.log(
  'Родительский элемент над <html>:',
  document.documentElement.parentNode
);

const divElement = document.body.children[0];

console.log('Элемент <div>:', divElement);

console.log('Соседний элемент перед <div>:', divElement.previousElementSibling);

console.log('Соседний узел перед <div>:', divElement.previousSibling);

console.log('Соседний элемент после <div>:', divElement.nextElementSibling);

console.log('Соседний узел после <div>:', divElement.nextSibling);

console.log(
  'Первый дочерний элемент внутри <div>:',
  divElement.firstElementChild
);

console.log('Первый дочерний узел внутри <div>:', divElement.firstChild);

console.log(
  'Последний дочерний элемент внутри <div>:',
  divElement.lastElementChild
);

console.log('Последний дочерний узел внутри <div>:', divElement.lastChild);

console.log('Дочерние узлы внутри <div>:', divElement.childNodes);
