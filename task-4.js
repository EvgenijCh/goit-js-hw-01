'use strict';
const userInput = prompt('Введите кол-во дроидов которое Вы хотите купить');
const credits = 23580;
const pricePerDroid = 3000;
if (userInput === null) {
  alert('Отменено пользователем!');
} else {
  const totalPrice = userInput * pricePerDroid;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${userInput} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
