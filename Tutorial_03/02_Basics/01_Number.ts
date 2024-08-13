// ! TypeScript Number :

//* All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type number while the big integers get the type bigint.


//? Decalraing a number type 

const mobile_no : number = 21;


// ? TypeScript supports the number literals for decimal, hexadecimal, binary, and octal literals:

// * Decimal numbers

let serial_no : number;
serial_no = 12;

//* Binary Numbers

let bin_num  = 0b100;
let another_binnum : number = 0B11010;

//* Octal Numbers

let octal_num = 0O2323;
let another_octal : number = 0o3456;

//* Hexadecimal numbers 

let hexadecimal_num = 0xabdc23;
let another_hexaddecimel : number = 0X23ACD;


// ? Big Integers

// * The big integers represent the whole numbers larger than 253 – 1. A Big integer literal has the n character at the end of an integer literal like this:

let Big_Num : bigint = 529385729502972n;

