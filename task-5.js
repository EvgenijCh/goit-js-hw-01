"use strict";

let userInput = prompt('Введите вашу страну');
userInput.toLocaleLowerCase();
let price;

// normalizeduserInput =  + userInput.slice(1) + userInput.toLowerCase();


if (userInput === null) {
    alert ('Отменено пользователем!');
    } 
    else if ('country' === ' ') {
    alert ('Страна не указана');
    } 
     
switch(userInput) {
    case 'Китай':
    price = 100;
    break; 

    case 'Чили':
    price = 250;
    break;

    case 'Австралия':
    price = 170;
    break;

    case 'Индия':
    price = 80;
    break; 

    case 'Ямайка':
    price = 120;
    break; 

    default:
        price = -1;
}

if (price !== -1) {
    alert (`Доставка в ${userInput} будет стоить ${price} кредитов`);
} else {
    alert(`В вашей стране доставка не доступна`);
}

