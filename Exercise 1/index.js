"use strict";
let productName = "Hamza";
let price = 32;
let discountAvailable = false;
console.log(productName, price, discountAvailable);
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(10, 2));
