//!  TypeScript Optional Parameters

//* In JavaScript, you can call a function without passing any arguments even though the function specifies parameters. Therefore, JavaScript supports the optional parameters by default.

//* The typescript the compiler thoroughly checks the passing arguments, you need to annotate optional parameters to instruct the compiler not to issue an error when you omit the arguments.

//* To make a function parameter optional, you use the ? after the parameter name.

// Example 

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//* The optional parameters must appear after the required parameters in the parameter list.

//Example 

function isValidUser(name : string, id : number, email? : string) : string{
    if(typeof email === undefined){
        return 'You entered a wrong email'
    }

    return `User name is ${name} and his id no. is ${id}`
}

console.log((isValidUser("hasan",10)));
