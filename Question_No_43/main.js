var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_list = ["David Copperfield", "Criss Angel", "Penn & Teller"];
function make_great(magician_listArry) {
    var great_magicians = [];
    for (var i = 0; i < magician_listArry.length; i++) {
        great_magicians.push("The great " + magician_listArry[i]);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Call make_great with a copy of the array
var great_magician_list = make_great(__spreadArray([], magician_list, true));
// Show the original magicians
console.log("Original Magicians:");
show_magicians(magician_list);
// Show the great magicians
console.log("\nGreat Magicians:");
show_magicians(great_magician_list);
