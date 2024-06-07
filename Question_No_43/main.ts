let magician_list = ["David Copperfield", "Criss Angel", "Penn & Teller"];

function make_great(magician_listArry: string[]): string[] {
    let great_magicians = [];
    for (let i = 0; i < magician_listArry.length; i++) {
        great_magicians.push("The great " + magician_listArry[i]);
    }
    return great_magicians;
}

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Call make_great with a copy of the array
let great_magician_list = make_great([...magician_list]);

// Show the original magicians
console.log("Original Magicians:");
show_magicians(magician_list);

// Show the great magicians
console.log("\nGreat Magicians:");
show_magicians(great_magician_list);
