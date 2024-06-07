let current_users = ["adil", "jamal", "muneer", "iqbal"];
let new_users = ["irfan"];

new_users.forEach((new_users) => {
if (
    current_users.some(
        (current_users) => current_users.toLocaleLowerCase() == new_users.toLocaleLowerCase()
    )
) {
    console.log(new_users + " will need to enter new user name");    
}   
else {
    console.log(new_users + " is available");    
}

});