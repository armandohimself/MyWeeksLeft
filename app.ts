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

// Types in arguements
function add(a: number, b: number) {
  // infers the type and enforced in constant
  const result = a + b;
  console.log(result);
}

// Return Types on Functions
function subtract(a: number, b: number): number {
  // infers the type and enforced in constant
  const result = a - b;
  console.log(result);
  return result;
}

// Valid JS code
function calculate(a: number, b: number, calcFn) {
  // calcFn intended to be used as a callable function passed as an argument is viable but it's of type any right now
  calcFn(a, b);
}

function calculate1(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  // subtract(a: number, b: number): number is how you define a type
  // so you use this syntax to define a callable function type of 2 input parameter both of type number and return type number:
  // (PARAMTERS + TYPES) => RETURN TYPE
  calcFn(a, b);
}

// now you can call it like this:
console.log(calculate(5, 4, add));

// You can create "custom types or aliases" using the type keyword
type AddFn = (a: number, b: number) => number;
// even though we have an = sign, because we use type, we're not assigning, we are creating a type!
// Now use it in the function above to replace calcFn to make it simpler

// Other types
type StringOrNum = string | number;

// object alias types
type Person = {
  name: string;
  dob: Date;
};

let person: Person;

interface Credentials {
  password: string;
  email: string;
}

let cred: Credentials;

cred = {
  password: "abc",
  email: "email@email.com",
};
