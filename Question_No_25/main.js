var alien_color = "green";
// passing version
if (alien_color == "green") {
    console.log("player just earned 5 points");
}
else {
    console.log("not points earned");
}
// failing version
alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points");
}
else {
    console.log("{}");
}
