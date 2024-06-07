var myname = "Sameer";
var age = 22;
var favourieNo = [2, 4, 6, 8, 10];
// string test
console.log("Is myname == sameer? I predict true");
console.log(myname == "Sameer"); //true
console.log("Is myname !== sameer? I predict false");
console.log(myname !== "Sameer"); //false
// tolowercase test
console.log("Is myname.tolowercase() == sameer? I predict true");
console.log(myname.toLowerCase() !== "Sameer"); //true
console.log("Is myname.tolowercase() !== sameer? I predict false");
console.log(myname.toLowerCase() == "Sameer"); //false
// numerical  test involving equality and inequality
console.log("Is age == 22? I predict true");
console.log(age == 22); //true 
console.log("Is age == 25? I predict false");
console.log(age == 25); //false
// greater than and less than test
console.log("Is age > 20? I predict true");
console.log(age > 20); //true 
console.log("Is age < 22? I predict false");
console.log(age < 22); //false
// greater than equal to and less than equal to function
console.log("Is age >= 20? I predict true");
console.log(age >= 20); //true 
console.log("Is age =< 22? I predict false");
console.log(age <= 21); //false
//Tests using "and" and "or" operators
console.log("Is age > 20 && age < 25? I predict true");
console.log(age > 20 && age < 25); //true 
console.log("Is age < 21 || age > 22? I predict false");
console.log(age < 21 || age > 22); //false
//Test whether an item is in a array
console.log("Is 4 in numbers? I predict true");
console.log(4 in favourieNo); //true
//Test whether an item is not in a array
console.log("Is 7 in numbers? I predict false");
console.log(7 in favourieNo); //false
