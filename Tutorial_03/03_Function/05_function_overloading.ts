// ! Typescript function overloading

//* Function overloading allows you to define multiple signatures for a single function and provide one implementation that handles all defined signatures.

//*Function overloading enables a function to handle different types of arguments. Additionally, the TypeScript compiler uses the function signatures to perform compile-time type checking to ensure type safety.

// ?Function overloading with optional parameters


function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
