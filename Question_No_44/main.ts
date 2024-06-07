function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log(""); // For an empty line after each sandwich order
}

// Calling the function three times with different number of arguments
make_sandwich("Lettuce", "Tomato", "Bacon");
make_sandwich("Turkey", "Cheese");
make_sandwich("Ham", "Swiss Cheese", "Mustard", "Pickles", "Lettuce");
