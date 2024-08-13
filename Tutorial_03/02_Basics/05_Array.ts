// ? Typescript Array Type 

// * A TypeScript array is an ordered list of data

//? Declaration of an array in Typescript 

let myArr : number[] =[]; //? Array of numbers 
myArr = [1,2,3,4,5]

let myString_Array : string[] =[]; //? Array of string
myString_Array = ["Rohim", "Korim", "Jobbar"]


let str_arr  : (string | number) []; //* Number and String both type array.
str_arr = [1,"hasan",3,"korim"]

 let type_inquery = str_arr[2]

 console.log(typeof (type_inquery)); 
 


//? Adding value to the Array

let new_arr : number[] = [] ;

new_arr[0] = 23;
new_arr[1] = 24;
new_arr.push(25);  //* Yes you can use the array method in Typescript :)
