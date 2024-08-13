//! Type in TypeScript:

//* =>  In TypeScript, a type is a convenient way to refer to different properties and functions that a value has.

//* => A type is a label that describes the different       properties and methods that a value has.Every value has a type.

//! Understanding Type Annotations in TypeScript:

// * TypeScript uses type annotations to specify explicit types for identifiers such as variables, functions, objects, etc.

//* Example of Type annotations

let x: number;
let y: string = "Your_name";
const z: string[] = ["hasan", "Eren", "Guts", "Aizen"]; //* Type annotaions of an array of string

const myobj: {   //* Type annotaion of object
  name: string;
  age: number;
} = {
  name: "eren",
  age: 21,
};

let myFunction : (name : string) => string;  //* The following shows a function annotation with parameter type annotation and return type annotation

myFunction = function (name : string){
    return `Hi,${name}`
}

