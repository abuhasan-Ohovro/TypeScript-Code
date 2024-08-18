//! Lets learn something about Array in Typescript

const superHero : string [] = []  // this is declaration of array in typescript

//* Another way to declare array

const myArr : Array<number> = []

//* Definig an array with type aliases

type AppUser = {
    name : string,
    email : string,
    id_no  : number,
    is_Paid : boolean
}

const UserData : Array<AppUser> = []

UserData.push({name : "Rohim", email : "Rohim@.com", id_no : 1, is_Paid : false})


//* Array inside array declaration

const complexModel : number [][] = [
    [2323,2232,534],
    [2323,2232,534],
    [2323,2232,534],
    [2323,2232,534],
]