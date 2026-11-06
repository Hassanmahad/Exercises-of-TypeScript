let productName : string = "Hamza";
let price : number = 32;
let discountAvailable : boolean = false;
 

console.log(productName, price, discountAvailable );


function getDiscount(price : number, discount : number) {
  return price - price * discount;
}

console.log(
    getDiscount(10,2)
)

function printLength(x: any) {
  console.log(x.length);
}
