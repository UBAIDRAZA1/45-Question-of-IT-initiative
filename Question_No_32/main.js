var current_users = ["adil", "jamal", "muneer", "iqbal"];
var new_users = ["irfan"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users == new_users; })) {
        console.log(new_users + " will need to enter new user name");
    }
    else {
        console.log(new_users + " is available");
    }
});
