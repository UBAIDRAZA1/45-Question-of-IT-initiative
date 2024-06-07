let guest_list = ["Adil", "Jamal", "Muneer", "Irfan"];
// for(let i=0; i<guest_list.length; i++){
//     console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
// }

let notCome = "Adil";
let come = "Iqbal";
guest_list[0] = come;
for(let i=0; i<guest_list.length; i++){
    console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
}
console.log("Mr " + notCome + "! is not comming a dinner tomorrow.\n");

guest_list.unshift("Babar Azam");                     //add array in start
guest_list.splice(guest_list.length/2,2, "Haris");    //add array in middle
guest_list.push("Shaheen");                           // add array in end
for(let i=0; i<guest_list.length; i++){
    console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
}
console.log("We have found a bigger table dinner table so we invited more guest");

