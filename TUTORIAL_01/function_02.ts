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


//?

const getmsg = (str : string) : string => {
    return " "
}

function this_is_function (){
    return "I will return by the time you are home !"
}

//* 

console.log("I promissed I will be a multi-billionaire and heip the poople who are ain nned , Y aALllah help hem to become your best servent and become a  belove one , ya allah pls forgive my old sins plas allah 😔😔")