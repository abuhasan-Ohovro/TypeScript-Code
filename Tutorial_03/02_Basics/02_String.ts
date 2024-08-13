//* Declaration of Typescript string

let str = "This is a JavaScript String"

let new_str : string = "Now this is a typeScript String" 

new_str = "Rohim" // You can assign string later 

//new_str = 24  // But you can assign number now.

// ? Tamplate string

//* Why should we use template string

/* There are several reason why you should use tamplate string :
 
   => //*  The template strings allow you to create multi-line strings

   => //* The template string provide the string interpolation features.

   => //* 
  


*/

let description = `Hey, 
     we are learning Typescript
     and this is very fun. Now we can understand big code base 
     Hurray !!!!`


console.log(description); // Example of multi-line string


let username: string = `Hasan` ;

let age : number  = 21;

let is_student : boolean =true ;

let info = `Hi, my name is ${username}, I am ${age} years old and you are asking that, Am I a student ? The aswer is ${is_student} `
     

console.log(info);

//* OUTPUT : "Hi, my name is Hasan, I am 21 years old and you are asking that, Am I a student ? The aswer is true " 



