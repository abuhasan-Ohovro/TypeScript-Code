//* Declaration of generics

function identity <Type> (val : Type) : Type {
    return val
}

//* Declaration the same code using others syntax

function identityTwo <T>(val : T) : T {
    return val
}

//* An usecase of the generics

interface Bottle {
    brand : string,
    type : number
}

identityTwo<Bottle>({
    brand : "",
    type : 34
})

//* Example of generics

function getProduct <T>  (product : T[]) : T {
    // Do some database operation 
    const myIndex = 3
    return product[3];
}

// * The same code using arrow function

const getMoreProduct = <T,> (product_ : T[]): T => {

    // do some database oparation 
     const myIndex = 4
     return product_[myIndex]

}