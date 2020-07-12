"use strict";
const china = "Китай";
const chili = "Чили";
const australia = "Австралия";
const india = "Индия";
const jamaika = "Ямайка";
const userInput = prompt("Введите вашу страну");
let price;
let message;
if (userInput === null) {
    alert(`Отменено пользователем!`);
} else {
    userInput.toLowerCase();
    switch (userInput) {
        case "Китай":
            price = 100;
            alert(`Доставка в ${userInput} будет стоить ${price} кредитов`);
            break;
        case "Чили":
            price = 250;
            alert(`Доставка в ${userInput} будет стоить ${price} кредитов`);
            break;
        case "Австралия":
            price = 170;
            alert(`Доставка в ${userInput} будет стоить ${price} кредитов`);
            break;
        case "Индия":
            price = 80;
            alert(`Доставка в ${userInput} будет стоить ${price} кредитов`);
        case "Ямайка":
            price = 120;
            alert(`Доставка в ${userInput} будет стоить ${price} кредитов`);
            break;
        default:
            alert(`В вашей стране доставка не доступна`);
    }
}