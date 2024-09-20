//mentoring Function

//memanggi tanpa param
// const kosong = () => {
//     return "hello world"
// }
// console.log(kosong());

//dengan param , console di luar
// const kosong1 = (a) => {
//     return a;
// }
// console.log(kosong1("hello"));

//tanpa param console di dalam
// const kosong2 = () => {
//     console.log("hello")
//     return
// }
// kosong2()

//dengan param console di dalam
// const kosong3 = (a) => {
//     console.log(a)
// }
// kosong3('hello12')

//console di luar, ada param hasilnya adalah param a + b
// const hitung = (a, b) => {
//     return a + b;
// }
// console.log(hitung(2, 5))

//dengan param, console di dalam, penjumlahan
// const hitung1 = (a, b) => {
//     console.log(a + b);
// }
// hitung1(2, 3)

//tanpa param console di dalam
// const hitung3 = () => {
//     console.log(2 + 6);
//     return;
// }
// hitung3()

//console di luar tanpa param
// const hitung4 = () => {
//     return 2 + 3;
// }
// console.log(hitung4())

//console log di luar mengembalikan array kosong, tanpa param
// const kelompok = () => {
//     return []
// }
// console.log(kelompok())

//
// const kelompok = () => {
//     return [1, 2, 3, 4, 5]
// }
// console.log(kelompok()[4])

//
// const group = () => {
//     return {}
// }
// console.log(group())

//
// const group = () => {
//         return {
//             name : "dhanty",
//             class: "fullstack",
//             getAddress: () => {
//                 return "surabaya";
//             }
//         }
// }
//     console.log(group().getAddress())

//
const kalkulasi = () => {
    return {
        penjumlahan: (a, b) => {return a + b},
        pengurangan: (a, b) => {return a - b},
        perkalian: (a, b) => {return a * b},
        pembagian: (a, b) => {return a / b}
    }
}
let hasilPengurangan = kalkulasi().pengurangan(10, 5);
let hasilPembagian = kalkulasi().pembagian(100, 20);
// console.log(hasilPengurangan);
// console.log(hasilPembagian);

let div = document.createElement("p");
div.idName = "kelas_1";
console.log(div)
let container = document.getElementById("container");
// console.log(div1);
container.append(div);
div.textContent = `hasil pengurangan : ${hasilPengurangan}`;

let div1 = document.createElement("div");
div.className = "kelas_2";
console.log(div1);
let container1 = document.getElementById("container");
container1.append(div1);
div1.textContent = `hasil pembagian : ${hasilPembagian}`;

