type User = {
    name : string,
    email : string,
    isActive : boolean
}

function creatUser(user : User) : User{
    return {name :"hasan",email :"hasan@gamil.com",isActive : false}
}

creatUser({name : "hasan", email : "hasan@gmail.com",isActive : false})

export{}