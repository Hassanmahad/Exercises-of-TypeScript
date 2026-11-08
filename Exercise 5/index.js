"use strict";
function echo(input) {
    return input;
}
// const result = echo(112);
const Myname = echo("Hamza"); // T is string
Myname.toUpperCase(); // ✅ Works
const age = echo(43); // T is number
age.toFixed(1); // ✅ Works
const stringResponse = {
    status: "haye lipax",
    data: "Done",
};
const userResponse = {
    status: "Yow",
    data: { id: 1, name: "Ali" },
};
function frist(items) {
    return items[1];
}
const firstNum = frist([1, 2, 3]);
const firstName = frist(["Ali", "Ayan"]);
