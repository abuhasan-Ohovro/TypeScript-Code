// ? TypeScript never Type

import { isFunctionOrConstructorTypeNode } from "typescript";

//* The never type is used to represent a value that never occurs. Because of this, you cannot assign any value to a variable with a never type.

//* Typically, you use the never type to represent the return type of a function that always throws an error.

//* Another usecase of never type is when a function that contains an indefinite loop , its return type is never

function infinite_function(): never {
  while (true) {}
}

//* Variable can also acquire the never type when you narrow its type by a type guard that can never be true.

// Example

function myErrorFunction(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  throw new Error("Invalid Type");
}




function give_error(msg : string) : never {
    throw new Error (msg)
}

function my_Error_Function_02(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  return give_error("You Give an invalid type! ")
}

//? Find out why we use give_error function even though the function parameter only takes string and number type? 