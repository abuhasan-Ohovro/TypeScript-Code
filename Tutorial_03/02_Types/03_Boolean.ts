// ?  Typescript Boolean

// * The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.

//? Declaring Boolean

let is_Active: boolean;

is_Active = true;

is_Active = false;

//* Boolena give you the opportunity to use the common boolean operators.

/* The most common boolean operator we use day to day basis
    //*  Logical AND operator :: &&
    //*  Logical OR operator :: ||
    //*  Logical NOT operator :: !

 */

//* Example of NOT Operator

let is_Student : boolean = true;

console.log(is_Student);

console.log(!is_Student)


//* Example of AND operator

let tutorial : boolean = true;
let practice : boolean = false;

let learing = tutorial && practice;

console.log(learing)



//* Example of OR operator

let practice_02 : boolean = false;
let self_projecct : boolean = true;

let true_coder = practice_02 || self_projecct;

console.log(true_coder)


//* Like a variable, you can annotate boolean parameters or return the type of a function using the boolean keyword:

function changeStatus(status: boolean): boolean {
    //...
    return status
 }
