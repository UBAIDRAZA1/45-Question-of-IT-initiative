var magician_list = ["David Copperfield", "Criss Angel", "penn & Teller"];
function make_great(magician_listArry) {
    for (var i = 0; i < magician_listArry.length; i++) {
        magician_list[i] = "The great " + magician_listArry[i];
    }
}
make_great(magician_list);
for (var i = 0; i < magician_list.length; i++) {
    function call_magician(list) {
        console.log(list);
    }
    console.log(magician_list);
}
