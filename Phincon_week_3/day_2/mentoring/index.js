//variabel : wadah
//data : isi informasi
//function : mesin, bisa mengembalikan sebuah nilai atau output.
//param : sesuatu yang diisi
//output hasil dari function
//function punya model penulisan
//function punya jalur masukin param, param tidak bisa masuk tanpa func.

//prosesnya bisa dilakukan dalam function tersebut
//contoh ada perulangan, perkondisian,


//array itu penampung
const siswa = ["david", "danti", "reza", "rifqi", "fauzan"];
function x(){ //funct. itu tanpa param tapi ada proses di dalamnya
    const y = "hello";
    return y;
}
console.log(x())

//about console.log : melihat apapun yang kita tulis
let a = "hello world"
console.log(a);

//
function number() {
    let angka = 10;
    return angka
}
// let tampung = number();
// console.log(tampung)

// let genap = 10 % 2
// if(10 % 2 == 0){
//     console.log(number())
// }


// let genap = 10 % 2
// let c = 9;
// if(c % 2 === 0){
//     console.log(number())
// }

// function genap(){
//     let c = 9;
//     if(c % 2 === 0){
//         console.log(number())
//     }
//     return c;
// }
// console.log(genap())

// function genap(){
//     let c = 3;
//     if(c % 2 != 0){
//         return c;
//     }else if(c % 2 === 0){
//         return 0;
//     }
// }
// console.log(genap())


// const loopCharacter = () => {
//         let text = "Phincon Academy";
//         text.split('').forEach(function(c) {
//         console.log(c)
//     })
// }
// loopCharacter()

const loopCharacterArr = () => {
    let text = "Phincon academy";
    return text.split("");
}
console.log(loopCharacterArr())
