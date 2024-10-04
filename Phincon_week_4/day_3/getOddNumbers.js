function getOddNumber(num) {
    const promise = new Promise((resolved, rejected) => {
        if(num % 2 !== 0){
            resolved("Angka yang anda masukan adalah bilangan ganjil")
        }else {
            rejected("Angka yang anda masukan adalah bilangan genap")
        }
    });
    return promise;
}

//menggunakan asyn await (try and catch)
async function execute(num) {
    try {
        const result = await getOddNumber(num);
        console.log(result);
    } catch (eror){
        console.log(eror);
    }
}
execute(20);

//menggunakan then (asynchronous)
// getOddNumber(10).then(
//     (resolved) => {
//         console.log(resolved);
//     },
//     (rejected) => {
//         console.log(rejected);
//     }
// );