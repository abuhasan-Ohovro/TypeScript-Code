class User {
     public email : string
    name : string
   // private readonly city_ : string = "Joypurhat"
    constructor (email : string, name : string){
        this.email = email;
        this.name = name 
    }

}

// An optimised way to write the same code

class _User {
   // readonly city_ : string = "Joypurhat"
    constructor (
        public email : string,
        public name : string
    ){

    }

}