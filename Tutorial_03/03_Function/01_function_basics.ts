// ! Typescript function 
// * Typescript functions are the building blocks of readable, maintainable and reuseable code.

// *  TypeScript allows you to use type annotations in parameters and return the value of a function.


//* When a function has a return type, the TypeScript compiler checks every return statement against the return type to ensure that the return value is compatible with it.


//* If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value.


//*The void prevents the code inside the function from returning a value and stops the calling code from assigning the result of the function to a variable. 

//* if a function has different branches that return different types, the TypeScript compiler may infer the union type or any type.

//? Function decalration
function name_(parameter_one, parameter_two) {
    if (parameter_one == "a") {
        return "You typed A";
    }
    else if (parameter_two == 'b') {
        return "You typed B ";
    }
    return "Your candite choice is ".concat(parameter_one);
}
