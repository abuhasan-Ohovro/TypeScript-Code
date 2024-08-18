// ! Typescript default parameter

//* JavaScript supported default parameters since ES2015 (or ES6)

// example of defalut parameter

function random ( name = 'unknown_user') : string {
    return `Your name is ${name} `
}

console.log(random("Hasan")) // Your name is Hasan
console.log(random())  // Your name is unknown_user

//* if you don’t pass arguments or pass the undefined into the function when calling it, the function will take the default initialized values for the omitted parameters.


// Another exmaple of defalult parameter

function discountPrice(price : number , today_disc = 0.10) : number{
    let CalculatedPrice =( price * (1 - today_disc)) 

    return CalculatedPrice;
}


console.log(`Your total price to pay is ${discountPrice(1000)} tk.`)

// Notice that you cannot include default parameters in function type definitions. 

/*function not_work (price : string , default_value : number = 12) => number; //A parameter initializer is only allowed in a function or constructor implementation.ts(2371)  */


//* Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.

// * When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.



