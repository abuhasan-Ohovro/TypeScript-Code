type User = {
    readonly _id : number,
    name : string,
    email : string,
    isActive : boolean,
    credCardDetails ?: number


}

let myUser : User = {
    _id : 1245,
    name : "Zoro",
    email : "zoro@yahoo.com",
    isActive : false
}

myUser.email = "zoro@gamil.com"


///* Assinging two or more typw into one

type cardNumber = {
    cardnum : string
}

type cardDate = {
    carddate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}