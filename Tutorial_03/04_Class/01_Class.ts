//! Typescript class

//* JavaScript does not have a concept of class like other programming languages such as Java and C#. In ES5, you can use a constructor function and prototype inheritance to create a “class”.

//? Creating a class

function Person(firstname,lastname,profession){
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;

}


//? creating a prototype to get the full name of the person by concatenating first name and last name of the Person

Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}

//? Creating a new object using the Person class

let person = new Person('Eren','Yeager',"Freedom Seeker")
console.log(person.getFullName());


//? Creating a class using the class keyword


class New_Person {
    firstname;
    lastname;
    email;

    constructor (firstname,lastname,email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    getfullname(){
        return `This person fullname is ${this.firstname} ${this.lastname} and the email is ${this.email}`
    }
    only_email(){
        return `Email of our new user is ${this.email}`
    }
}

let new_user = new New_Person("Johan","Libert","johan@nvidia.com")
console.log(new_user.getfullname());
console.log(new_user.only_email());
