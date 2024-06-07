let size = ["medium", "large"];
let defaultMessage = "I love typescript";
let mediumShirt = ("Size of shirt is: " + size[0] +", " + defaultMessage );
let largeShirt = ("Size of shirt is: " + size[1] +", " + defaultMessage );

function make_tshirt(){
    let simpleFunction = (mediumShirt);
    console.log(simpleFunction);
    return simpleFunction
    
}
let response = make_tshirt();