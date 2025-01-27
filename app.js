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
