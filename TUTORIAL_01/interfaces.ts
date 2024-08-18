interface User {
  readonly dbId: number;
  email: string;
  userID: number;
  googleID: string;
  startTrail(): string;
  getCoupon(couponname : string, value : number ) : number
}

const hasan: Admin = {
    dbId: 22,
    email: "hasan@gamil.com",
    userID: 5435,
    googleID: "24242464@",
    startTrail: () => {
        return "Trail Started";
    },
    getCoupon: (name: "hasan", num: 10) => {
        return 10;
    },
    role: "admin",
    githubToken: "6434t",
    //name: "",
    //city_: "tutu"
};

// YOU can define another property to the interface like this. This term called reopening the interfaces.

interface User {
    githubToken : string,

}

//* Inheritence of the interfaces 

interface Admin extends User {

   // role : string
   role : "admin" | "TA" | "Learners"

}