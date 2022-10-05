"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
function negyzet(szam) {
    return szam * szam;
}
let message = "Hello word";
console.log(message);
let ures;
if (message.startsWith('H')) {
    console.log("H-val kezdődik");
    ures = 1;
}
else {
    ures = 2;
}
let ertek = 5;
let user = new User_1.User('nev', 44);
user.kiir();
