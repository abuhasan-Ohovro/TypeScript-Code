type User = {
    readonly _id : string,
    name : string,
    email: string,
    isActive : boolean,
    creditCardDeatials ?: number
}

let myUser : User = {
    _id : "1234",
    name : "hasan",
    email : "hasan@gamil",
    isActive : false
}