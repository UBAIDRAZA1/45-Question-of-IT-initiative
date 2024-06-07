var size = ["medium", "large"];
var defaultMessage = "I love typescript";
var mediumShirt = ("Size of shirt is: " + size[0] + ", " + defaultMessage);
var largeShirt = ("Size of shirt is: " + size[1] + ", " + defaultMessage);
function make_tshirt() {
    var simpleFunction = (mediumShirt);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
