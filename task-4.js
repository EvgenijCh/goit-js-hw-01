"use strict";

let credits;
let pricePerDroid;
let totalPrice;
let userInput = prompt ('Введите кол-во дроидов которое Вы хотите купить')

credits = 23580;
pricePerDroid = 3000;

if (userInput === null) {
    alert ('Отменено пользователем!');
} else {
let num = Number(userInput);
    totalPrice = num * pricePerDroid;

 if (totalPrice > credits) {
    alert ('Недостаточно средств на счету!');
} else {
let rest = credits - totalPrice;
    alert(`Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`);
}
}

