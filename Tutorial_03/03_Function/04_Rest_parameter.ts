//! Typescript Rest Parameter

//* A rest parameter allows a function to accept zero or more arguments of the specified type.

//? Rules of The Rest parameter

//* A function has only rest parameter

//* The rest parameter appear last in the parameter list

//* The type of the rest parameter is an array type



//* Rest parameter with a single type 

function Price ( ...numbers : number[]){
    let TotalPrice = 0;
    numbers.forEach((num) => TotalPrice += num)
    return TotalPrice; 
}


console.log(Price(10,20,30)); // 60
console.log(Price(10,20,30,40)); // 100

//* Rest parameter with multiple types


function customerPrice (...purcheseInfo : (string | number)[]) : (string | number) [] {
    let TotalPrice = 0.00 ;
    let items = '';

    purcheseInfo.forEach((product) =>  {

        if (typeof product === 'number'){
            return TotalPrice += product
        }else if ( typeof product === 'string'){
            return items += product
        }
    });

    return [TotalPrice , items]
}

const [TotalPrice,items] = customerPrice("T-shirt - ", 259, "pajama - ",500,"Shirt - ", 599)

console.log({items});
console.log({TotalPrice});