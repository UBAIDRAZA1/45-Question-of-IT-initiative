var guest_list = ["Adil", "Jamal", "Muneer", "Irfan"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n");
}
var notCome = "Adil";
var come = "Iqbal";
guest_list[0] = come;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear! " + guest_list[i] + "\n    You are invited for a dinner tomorrow. \n      Than You! \n");
}
console.log("Mr " + notCome + "! is not comming a dinner tomorrow.");
