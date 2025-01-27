let myName: string = "Armando";

let userId: string | number = "abc123";

// Is how we define an object type
// let user: {};

// Then you can define the shape of what you are looking for in your object. Using ; is more common
let user: {
  name: string;
  age: number;
  isAdmin: string | boolean;
};

// Now we must initialize our user object
user = {
  name: "Armando",
  age: 32,
  isAdmin: "true",
};

console.log(user.name);

user.name = "Armando Arteaga";

console.log(user.name);

//! Arrays
// long way
let hobbies: Array<string>;
//short way
let movies: string[];

hobbies = ["Coding", "Cooking", "Working Out"];
movies = ["Predestination", "Nosferatu", "Iron Man 2"];
