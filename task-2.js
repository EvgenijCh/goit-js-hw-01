"use strict";

const total = 100;
const ordered = 50;
let message;

if (ordered > total) {
    message = "На складе недостаточно товаров!"
    console.log(message);
}else {(ordered <= total) 
    message = "Заказ оформлен, с вами свяжется менеджер."
    console.log(message);
}

