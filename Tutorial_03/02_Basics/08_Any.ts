// ! TypeScript any Type

//* Sometimes, you may need to store a value in a variable. But you don’t know its type when writing the program. And the unknown value may come from a third-party API or user input.

//*If you declare a variable without specifying a type, TypeScript assumes that you use the any type. This feature is called type inference. TypeScript guesses the type of the variable. For example: 

let x;


// *The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type-checking.

//* Use the any type to store a value that you don’t know its type at the compile-time or when you migrate a JavaScript project over to a TypeScript project.
