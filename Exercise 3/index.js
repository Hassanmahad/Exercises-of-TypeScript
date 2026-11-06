"use strict";
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Hassan", "Mahad"));
function registerUser(username, isAdmin, language = "en") {
    console.log(`${username} ,  ${isAdmin} , ${language}`);
}
console.log(registerUser("Hassan", true));
function average(...scores) {
    if (scores.length === 0) {
        return 0;
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(average(80, 90, 70));
