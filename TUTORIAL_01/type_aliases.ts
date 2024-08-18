type User = {
    name : string,
    email : string,
    isActive : boolean
}

function createUser (user : User ) : User {
    return {name : "itachi", email : "itachi@gmail.com",isActive : true}
}

createUser({name : "",email : " ", isActive: true})

























export{}