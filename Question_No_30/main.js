var users = ["adil", "jamal", "muneer", "iqbal", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user == "admin") {
        console.log("Hello admin, wuold you like to see a status report?");
    }
    else {
        console.log("Hello " + user + ", wuold you like to see a status report?");
    }
}
