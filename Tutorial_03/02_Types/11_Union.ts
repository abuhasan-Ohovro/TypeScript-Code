//! Typescript Union Type

// * A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

//? Example of Union type

function add(a: number | string, b: number | string) :  number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}