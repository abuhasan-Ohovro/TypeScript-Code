type User_01 = {
    name : string;
    id : number
}

type Admin = {
    username : string,
    id : number 
}

let union : User_01 | Admin = {name : "Naruto",id : 7}
union = {username : "hasan", id : 345324}


//* Applycation of Union type on a function 

function getID (id : number | string){
    console.log(`Database id is : ${id}`);
}

getID('3')
getID(3)


///* Another use case of union type on a variable 

function getDbId (id : number | string){
    if(typeof id === "string"){
    id.toLowerCase()
}
}



///* Array

const data : number [] =[1,2,3,4,5]
const data_2 : string[] = ["1","4","9"]
const data_3 : (string | number) [] = ["1","3","9",8]