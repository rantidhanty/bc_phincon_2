// function text(x){
//     console.log(x)
// }
// text("hello")

// function cek(y){
//     return y;
// }
// console.log(cek("hello"))

//func lopp 1-10
// function perulangan(){
//     for(let i = 1; i <= 100; i++){
//         console.log(i)
//     }
// }
// perulangan()

//func angka genap 1-100
// function angkaGenap(){
//     for(let i = 1; i <= 100; i++){
//         if(i % 2 == 0){
//             console.log(i)
//         }
//         if(i >= 50 && i <= 80 && i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }
// angkaGenap()

// function angkaGenap(x){
//     for(let i = 0; i <= x; i++){
//         if(i % 2 == 0){
//             console.log(i)
//         }
//         if(i >= 50 && i <= 80 && i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }
// angkaGenap(500)

function angkaGenap(x){
    let b = []
    for(let i = 0; i <= x; i++){
        // if(i % 2 == 0){
        //     console.log(i)
        // }
        if(i >= 50 && i <= 80 && i % 2 !== 0){
            console.log(i)
            b.push(i)
            
        }
    }
    return b;
}
console.log(angkaGenap(90));

