// it does no include tracks number
function make_album1(artistName, albumTittle) {
    return { artistName: artistName, albumTittle: albumTittle };
}
var album1 = make_album1("Ali Zafar", "psl song");
var album2 = make_album1("Atif Aslam", "Ipl song");
var album3 = make_album1("Asim Azhar", "cpl song");
console.log(album1);
console.log(album2);
console.log(album3);
// it include tracks number
function make_album2(artistName, albumTittle, numberoftracks) {
    return { artistName: artistName, albumTittle: albumTittle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Ali Zafar", "psl song", 50);
var album5 = make_album2("Atif Aslam", "Ipl song", 100);
var album6 = make_album2("Asim Azhar", "cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
