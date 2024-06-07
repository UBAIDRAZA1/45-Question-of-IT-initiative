function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log(""); // For an empty line after each sandwich order
}
// Calling the function three times with different number of arguments
make_sandwich("Lettuce", "Tomato", "Bacon");
make_sandwich("Turkey", "Cheese");
make_sandwich("Ham", "Swiss Cheese", "Mustard", "Pickles", "Lettuce");
