function cardNumber(num: number): number {
  return  num + 3;
}

cardNumber(5);

//* Arrow function 

const getHello = ( s : string) : string => {
    return " "
}

//* Application on a array

const heros = ["batman","Ironman", "superman"];

heros.map((hero): string =>{
    return `My favorite hero is ${hero}`
})

//* Another Use case 

function consoleError (errmsg : string) : void {
    console.log(errmsg)
}

function handleError (errmsg : string) : never {
    throw new Error(errmsg);
    

}