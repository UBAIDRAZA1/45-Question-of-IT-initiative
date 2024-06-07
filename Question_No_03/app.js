// lower case
var personName = "Muhammad Ubaid Raza";
console.log("Lowercase, ".concat(personName.toLowerCase()));
// Upper case
console.log("Uppercase, ".concat(personName.toUpperCase()));
// Title case
console.log("Titlecase, ".concat(personName.replace(/\bw/g, function (c) { return c.toUpperCase(); })));
