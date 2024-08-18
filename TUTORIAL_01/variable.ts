//* String

let greetings : string = "Hello World";
console.log(greetings);
export{}

//* Number 

let userID : number = 345.335;
userID.toFixed(2);

let  cardNum = 3435;// Typescript transpilers is smart enough to know that the cardnum is a number type variable. if you want to add a property which is not applicable to the number it will automaticaly give a squggly line.So, you dont have to assign the type on every variable.

console.log(userID);


//* Boolean

let isLoggedIn : boolean = false;