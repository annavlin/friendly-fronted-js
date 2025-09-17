// import initTabs from './tabs.js';
// import { initModals } from './modals.js';
// import { initSliders } from './sliders.js';

// initTabs();
// initModals();
// initSliders();

// import logCat, { a, b, c } from './constans.js';
import * as constans from './constans.js'; //- все импортированные файлы будут хранить в этом новосозданном файле

console.log('constans:', constans);

console.log(constans.a);
console.log(constans.b);
console.log(constans.c);
constans.default();

// при импорте файл импортируется только один раз, джае если он упомянался несколько раз

// МОДУЛЬ- это JS- файл, который подключается к разметку через атребут type = "module"- ставит после других действий
