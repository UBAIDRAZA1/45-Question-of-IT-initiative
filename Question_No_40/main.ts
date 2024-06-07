// it does no include tracks number
function make_album1(artistName:string, albumTittle:string){
    return{artistName,  albumTittle}
}

let album1 = make_album1("Ali Zafar", "psl song");
let album2 = make_album1("Atif Aslam", "Ipl song");
let album3 = make_album1("Asim Azhar", "cpl song");

console.log(album1);
console.log(album2);
console.log(album3);

// it include tracks number
function make_album2(artistName:string, albumTittle:string, numberoftracks?:number){
    return{artistName,  albumTittle, numberoftracks}
}

let album4 = make_album2("Ali Zafar", "psl song", 50);
let album5 = make_album2("Atif Aslam", "Ipl song", 100);
let album6 = make_album2("Asim Azhar", "cpl song");

console.log(album4);
console.log(album5);
console.log(album6);