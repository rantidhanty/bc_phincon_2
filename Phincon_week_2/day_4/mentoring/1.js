//01
// let container = document.getElementById("container")
// const data = () => {
//     return "hello world"
// }
// container.textContent = data()

//02
// let container = document.getElementById("container");
// const data = () => {
//     return "hello phincon"
// }
// container.textContent = data()

//03 func : blueprint , pram sbg: alias/ nilai yang di kandung func yang dipanggil
// const free = (halo) => {
//     return halo;
// }
// // console.log(free("hello world"))
// let a = free("hello world")
// console.log(a)

//04 func yang di tampung ke variabel
// const free = (a) => {
//     return a;
// }
// let c = free(3000);
// console.log(c)

//05
// const penjumlahan = (a, b) => {
//     return a + b
// }
// let jumlah = penjumlahan(10, 5);
// console.log(jumlah)

//06
// let kata = "hello";
// const data = (a) => {
//     return a
// }
// console.log(data(kata +  " " + "worlddddd"))

// let c = "hello";
// let d = "phincon";
// console.log(c + "world")

//07
// let kata = "hello";
// const data = (a) => {
//     return a
// }
// let free = data(kata + " " + "world11")
// console.log(free)

//08
// const operasi = () => {
//     let a = 25;
//     let b = 30;
//     return a + b;
// }
// console.log(operasi())

//09
// const x = () => {
//     let a = 10;
//     let b = 12;
//     return a * b;
// }
// console.log(x())

//10
// const x = (a, b) => {
//     return a * b;
// }
// console.log(x(10, 12))

//11
// const y = () => {
//     let a = "hello";
//     for (let i = 1; i <= 20; i++){
//         console.log(a)
//     }
//     // return a;
// }
// y()
// console.log(y());

//console.log di luar akan ada nilai yang di kembalikan

//12
// const y = () => {
//     let a = "hello";
//     let b = "world";
//     for (let i = 1; i <= 20; i++){
//         // console.log(b)
//     }
//     // console.log(b)
//     return a + b;
// }
// console.log(y())

//13
// const y = () => {
//     let a = "hello";
//     let b = "world";
//     for (let i = 1; i <= 20; i++){
//         console.log(b)
//     }
//     // console.log(b)
//     // return a + b;
// }
// y()
// // console.log(y())

//14
// const y = () => {
//     for (let i = 1; i <= 10; i++){
//         console.log(i)
//     }
// }
// y()

//15
// const y = () => {
//     for (let i = 1; i <= 20; i++){
//         if(i % 2){
//             console.log(i);
//         }
//     }
// }
// y()

//16
// const y = () => {
//     for (let i = 1; i <= 20; i++){
//         if(i == 18 || i == 15){
//             console.log(i)
//         }
//     }
// }
// y()

//17
// const y = () => {
//     for (let i = 1; i <= 20; i++){
//         if(i == 2 || i == 5 || i == 10){
//             console.log(i)
//         }
//     }
// }
// y()

//18
// const y = (a) => {
//     // for (let i = 1; i <= 100; i++){
//     //     console.log(i)
//     // }
//     return a
// }
// console.log(y(100))

// //19
// const y = () => {
//     let a = [];
//     for(let i = 1; i <= 100; i++){
//         a.push(i);
//     }
//     return a
// }
// // y()
// console.log(y())

//20
// const y = () => {
//     let a = [];
//     for(let i = 1; i <= 100; i++){
//         if(i % 2){
//             a.push(i);
//         }
        
//     }
//     return a
// }
// // y()
// console.log(y())

//21
// const y = () => {
//     let a = [];
//     for(let i = 1; i <= 100; i++){
//         if(i % 2 == 0){
//             a.push(i);
//         }
//     }
//     return a
// }
// // y()
// console.log(y())

//22
const x = () => {
    const obj = [
        {
            nama: "danti",
            kelas: "fullstack"
        },
        {
            prodi: "sistem informasi",
            jenjang: "s1"
        },
        {
            matkul: "web programming",
            database: "mySQL"
        }
    ]
    // obj.forEach(function(y) {
    //     console.log(y)
    // })
    console.log(obj[2].database)
}
x()
// console.log(x())
