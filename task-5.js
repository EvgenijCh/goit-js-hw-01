"use strict";

const userInput = prompt('Введите вашу страну');
let price;
const Китай = 100;
const Чили = 250;
const Австралия = 170;
const Индия = 80;
const Ямайка = 120;

const normalizeduserInput = userInput [0].toLocaleUpperCase() + userInput.slice(1).toLocaleLowerCase();

if (userInput !== null);
     
switch(normalizeduserInput) {
    case 'Китай':
    alert (`Доставка в ${userInput} будет стоить ${Китай} кредитов`);
    break; 
        
    case 'Чили':
    alert (`Доставка в ${userInput} будет стоить ${Чили} кредитов`);
    break; 

    case 'Австралия':
    alert (`Доставка в ${userInput} будет стоить ${Австралия} кредитов`);
    break; 

    case 'Индия':
    alert (`Доставка в ${userInput} будет стоить ${Индия} кредитов`);
    break; 

    case 'Ямайка':
    alert (`Доставка в ${userInput} будет стоить ${Ямайка} кредитов`);
    break; 

    default:
        alert(`В вашей стране доставка не доступна`);
       
}

