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
let users = [];
users.push(new User_1.User("masikuser", 10));
users.push(user);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'user2'];
let userHalmaz = new Set();
let nevUser = new Map();
let nevUser2 = new Map();
nevUser2.set("usernev", new User_1.User("usernev", 33));
//nevUser2.get("usernev").kiir();
/*
function osszeg(t : number[] | string[]){
    let sum : string | number = 0;;
    for(let e of t){
        sum += e;
    }
    return sum;
}
*/
function osszeg(t) { }
;
console.log(osszeg([1, 45666, 43345]));
console.log(osszeg(['a', 'b', 'c']));
function IDkiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
IDkiir(12);
IDkiir("asdf423");
let elem = document.getElementById('asdf');
if (elem !== null) {
    console.log(elem.textContent);
}
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
function szamol() {
    let szam = parseInt(document.getElementById('szam').value);
    document.getElementById('kimenet').textContent = negyzet(szam).toString();
}
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
document.addEventListener('DOMContentLoaded', init);
