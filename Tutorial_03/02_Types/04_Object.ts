// ? TypeScript object Type


//* Declaration of Object Type 

let username_ : object = {
    firstname : "Hasan",
    lastname : "Mondal",
    age : 21,
    jobtitle : "Software Enginner"

}

console.log(username_);


/* OUTPUT : {
  "firstname": "Hasan",
  "lastname": "Mondal",
  "age": 21,
  "jobtitle": "Software Enginner"
}  */

// username = {DOB : "15 Nov"}  //! You can assing only object later on to the object type data type and you are not allowed to assign any primitive type data type .

// * For example :
  

// username = " Korim" //! Will give you an error


//? Here what we have done overall is javascript there is no extra typescript features.

//? Let's see if we want to use the Typescript features in object .


//? Syntax 01 =>>

 let myAppUser : {
  
    firstname : string,
    lastname : string,
    age: number,
    is_Studnet : boolean

}

myAppUser = {
    firstname : "Johan",
    lastname : "Libert",
    is_Studnet: true,
    age : 21
}



//? Syntax 02 =>>

let myAppUser_02 : {
  
    firstname : string,
    lastname : string,
    age: number,
    is_Studnet : boolean

}  = {
    firstname : "Johan",
    lastname : "Libert",
    is_Studnet: true,
    age : 21
}
 
// ! Topic of further study :  =>  object vs. Object   => The empty type {}


//? The empty type {}

let empty_obj : {} = {};

empty_obj = {
    name : "hasan"
} // You can asssign properties in a empty type object

console.log(empty_obj);


