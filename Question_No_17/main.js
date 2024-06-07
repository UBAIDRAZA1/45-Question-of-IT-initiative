var guest_list = ["Adil", "Jamal", "Muneer", "Irfan"];
// for(let i=0; i<guest_list.length; i++){
//     console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
// }
var notCome = "Adil";
var come = "Iqbal";
guest_list[0] = come;
// for(let i=0; i<guest_list.length; i++){
//     console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
// }
// console.log("Mr " + notCome + "! is not comming a dinner tomorrow.\n");
guest_list.unshift("Babar Azam"); //add array in start
guest_list.splice(guest_list.length / 2, 2, "Haris"); //add array in middle
guest_list.push("Shaheen"); // add array in end
// for(let i=0; i<guest_list.length; i++){
//     console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n" );
// }
// console.log("We have found a bigger table dinner table so we invited more guest");
console.log("\n Unfortunately we are out of space, so we have space for two guest only. \n");
while (guest_list.length > 2) {
    var remove_list = guest_list.pop();
    console.log("Sorry! Dear " + remove_list + ", you are not invited for a dinner tomorrow.");
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear! " + guest_list[i] + "\n    You all  are a still invited for a dinner tomorrow. \n      Than You! \n");
}
guest_list.splice(0, 2); // empty list 
console.log(guest_list);
