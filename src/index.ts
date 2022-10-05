

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