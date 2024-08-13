//! Typescript Type Aliases

//? Introduction to typescript type aliases

//* In TypeScript, a type alias allows you to create a new name for an existing type.

//*Type aliases can be useful for:

// Simplifying complex types.
// Making code more readable.
// Creating reusable types that can be used in many places in the codebase.

//? Type Alias example

//*   1)primitive types

type username = string | string[];

let firstname: username;
let lastname: username;

//*   2) Object types

type AppUser = {
  name: string;
  age: number;
};

let usercount: AppUser = {
  name: "hasan",
  age: 21,
};

//*   3) Union  types

type best_chioce = string | number;

let chosse_01: best_chioce = "hasan";
let chosse_02: best_chioce = 21;

//*   4) Intersection types

type user = {
  name: string;
  age: number;
};

type contact = {
  email: string;
  phone: number;
};

type UserInfo = user & contact;

let AppUserInfo: UserInfo = {
  name: "hasan",
  age: 21,
  email: "hasan@goggle.com ",
  phone: 2321894180479,
};
