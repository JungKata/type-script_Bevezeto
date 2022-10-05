

import internal from "stream";
import{User} from "./User";

function negyzet(szam : number) : number{
    return szam * szam;
}


let message : string = "Hello word";

console.log(message);
let ures : number;
if(message.startsWith('H')){
    console.log("H-val kezdődik")
    ures = 1;
}else{
    ures = 2;
}

let ertek = 5;

let user = new User('nev', 44);
user.kiir();

let users : User[] = [];
users.push(new User("masikuser", 10));
users.push(user);
console.log(users);
let u = users[1];
for(let e of users){
    e.kiir();
}

let usernames : Array<string> = ['str1', 'user2'];
let userHalmaz : Set<User> = new Set();

let nevUser : Map<string, User> = new Map();
let nevUser2 = new Map<string, User>();

nevUser2.set("usernev", new User("usernev", 33));
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
function osszeg(t : number[] | string[]){};
console.log(osszeg([1 ,45666 , 43345]));
    console.log(osszeg(['a', 'b', 'c']));

function IDkiir(id : number | string)
{
    if(typeof id ==='number')
    {
        console.log(id);
    }else{
        console.log(id.toUpperCase());
    }
}

IDkiir(12);
IDkiir("asdf423");

let elem = document.getElementById('asdf');
if(elem !== null){
console.log(elem.textContent);
}
console.log(elem?.textContent)

function szamol(){
    let szam = parseInt((document.getElementById('szam') as HTMLInputElement).value);
    (document.getElementById('kimenet') as HTMLElement).textContent = negyzet(szam).toString();
}

function init(){
document.getElementById('szam')?.addEventListener('input', szamol);
}

document.addEventListener('DOMContentLoaded', init)