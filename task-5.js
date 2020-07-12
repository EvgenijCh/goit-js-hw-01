'use strict';
const china = 'Китай';
const chinaprice = 100;
const chile = 'Чили';
const chiliprice = 250;
const australia = 'Австралия';
const australiaprice = 170;
const india = 'Индия';
const indiaprice = 80;
const jamaika = 'Ямайка';
const jamaikaprice = 120;
const userInput = prompt('Введите вашу страну');
if (userInput === null) {
  alert(`Отменено пользователем!`);
} else {
  switch (userInput.toLowerCase()) {
    case 'китай':
      alert(`Доставка в ${userInput} будет стоить ${chinaprice} кредитов`);
      break;
    case 'чили':
      alert(`Доставка в ${userInput} будет стоить ${chiliprice} кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в ${userInput} будет стоить ${australiaprice} кредитов`);
      break;
    case 'индия':
      alert(`Доставка в ${userInput} будет стоить ${indiaprice} кредитов`);
    case 'ямайка':
      alert(`Доставка в ${userInput} будет стоить ${jamaikaprice} кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
