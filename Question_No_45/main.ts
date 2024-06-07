interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function create_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Calling the function with required information and additional name-value pairs
let car1 = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2021]);
let car2 = create_car("Honda", "Civic", ["color", "red"], ["sunroof", true]);
let car3 = create_car("Ford", "Mustang", ["color", "black"], ["engine", "V8"], ["convertible", true]);

// Printing the objects to ensure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
