const http = require("http");
const dt = require('./dateTime'); //diambil dari nama file
const port = 3000; //port default yang akan di pakai, bisa juga pakai domain yang di beli
const { filterPrimeNumber, generateNumbers } = require('./bilanganPrimaLodash')

const server = http.createServer((function(request, response) {
    const url = request.url;
    response.writeHead(200, {
        // "content-Type": "text/plain",
        "content-Type": "text/html",
        // "content-Type": "application/json",
    });
    if (url === "/") {
        response.write("Phincon academy");
    }else if (url === "/day"){
        response.write("hari ini ke : " + dt.getDay());
    }else if (url === "/month"){
        response.write("bulan ini ke : " + dt.getMonth());
    }else if(url === "/year"){
        response.write("tahun ini : " + dt.getYear());
    }else if(url === "/showDay"){
        response.write("hari ini adalah :" + dt.day);
    }else if(url === "/getFull"){
        response.write("hari, tanggal, bulan sekarang :" + dt.getFullDate());
    }else if(url === "/getNumbers"){
        dt.numbers.forEach((number) =>{
            response.write('<div style="color:red;">' + String(number) + '</div>')
        });
    }else if(url === "/getPrimesNumbers"){
        const numbers = filterPrimeNumber(generateNumbers(100));
        console.log(numbers)
        numbers.forEach((number) =>{
            response.write(String(number) + " ");
        });
    }else{
        response.write("Tidak ada yang di masukan");
    }
    response.end();
}));
console.log(`Server start on port ${port}`)
server.listen(port);

