var myName = "Armando";
var userId = "abc123";
// Is how we define an object type
// let user: {};
// Then you can define the shape of what you are looking for in your object. Using ; is more common
var user;
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
var hobbies;
//short way
var movies;
hobbies = ["Coding", "Cooking", "Working Out"];
movies = ["Predestination", "Nosferatu", "Iron Man 2"];
// Types in arguements
function add(a, b) {
    // infers the type and enforced in constant
    var result = a + b;
    console.log(result);
}
// Return Types on Functions
function subtract(a, b) {
    // infers the type and enforced in constant
    var result = a - b;
    console.log(result);
    return result;
}
// Valid JS code
function calculate(a, b, calcFn) {
    // calcFn intended to be used as a callable function passed as an argument is viable but it's of type any right now
    calcFn(a, b);
}
function calculate1(a, b, calcFn) {
    // subtract(a: number, b: number): number is how you define a type
    // so you use this syntax to define a callable function type of 2 input parameter both of type number and return type number:
    // (PARAMTERS + TYPES) => RETURN TYPE
    calcFn(a, b);
}
// now you can call it like this:
console.log(calculate(5, 4, add));
var person;
var cred;
cred = {
    password: "abc",
    email: "email@email.com",
    StringOrNum: "string",
    calcFn: function multiply(a, b) {
        return a * b;
    },
};
console.log(cred.calcFn(4, 4));
// When would you use Interface versus type keyword?
