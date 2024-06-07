function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Calling the function with required information and additional name-value pairs
var car1 = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2021]);
var car2 = create_car("Honda", "Civic", ["color", "red"], ["sunroof", true]);
var car3 = create_car("Ford", "Mustang", ["color", "black"], ["engine", "V8"], ["convertible", true]);
// Printing the objects to ensure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
