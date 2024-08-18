//? String Literal 

//* TypeScript string literal types that define a type that accepts a specified string literal.

//* The string literal type allows you to define a type that accepts only one specified string literal.

//* The string literal value is useful to limit a possible string value that a variable can store.

//* The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable.

let userMsg : 'send' | 'sendme'  | 'sendMe'| 'Send';

userMsg = 'Send'

//? Using too many string liteal can cause varbose so use type aliases,

type event = "click"|"dbClick" |"mouseHover"| "mouseUp";


let _MouseEvent : event = 'mouseUp'