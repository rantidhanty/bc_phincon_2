// 1. Hitung Jumlah Bilangan Ganjil
function hitungbilanganGanjil(n) {
    let angka = 0;
    for(let i = 1; i <= n; i++){
        if(i % 2 !==0){
            angka++
        }
    }
    return angka;
}
console.log(hitungbilanganGanjil(10))

// 2. Cek Tahun Kabisat
function cekTahunkabisat(tahun) {
    let isKabisat = false;
    if(typeof tahun !== "number"){
        return "invalid value";
    }
    if(tahun % 400 === 0 || tahun % 4 === 0 ){
        isKabisat = true;
    }else if (tahun % 100 === 0 ){
        return isKabisat
    }
    return isKabisat;
}
console.log(cekTahunkabisat(2024));
//setiap buat function best practice ada default return


// 3. Hitung faktorial
function hitungFaktorial(n) {
    if (n == 0){
        return 1;
    }else{
        return n * hitungFaktorial(n-1);
    }
}
console.log(hitungFaktorial(5))

// 4. cari bilangan prima
function cariBilanganPrima(n){
    function prima(num){
        if(num <= 1) return false;
        if(num <= 3) return true;
        if(num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6){
            if (num % i === 0 || num % (i+2) === 0)
                return false;
        }
        return true;
    }
        const primes = [];
        for (let i = 2; i <= n; i++){
            if (prima(i)) {
                primes.push(i);
            }
        }
    return primes;
}
console.log(cariBilanganPrima(5));

//4
function prima(n){
    if (n === 0 || n === 1){
        return 1;
    }
    for (let i = n - 1; i >= 1; i--){
        n *= i;
    }
    return n;
}
console.log(prima(5));

function crbilanganPrima(n){
    let bPrima = [];
    for (let i = 2; i <= n; i++){
        let isPrime = true;
        for(let j = 2; j * j <= i; j++){
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            crbilanganPrima.push(i);
        }
    }
    return bPrima;
}
console.log(crbilanganPrima(20));


// 5. Hitung Jumlah Digit
function hitungJumlahDigit(angka) {
    const angkaStr = angka.toString();
    let num = [];
    let jumlah = 0;
    for(let i = 0; i < angkaStr.length; i++){
        let angkaint = parseInt(angkaStr[i], 10);
        jumlah += angkaint;
        num.push(angkaint);
    }
    console.log(num)
    return jumlah;
}

console.log(hitungJumlahDigit(12345));

// 6. Cek palindrome
function cekPalindrome(kata) {
    const cleanedValue = kata.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const revesedValue = cleanedValue.split('').reverse().join('');

    if(cleanedValue === revesedValue){
        return(`${kata} ini palindrome`);
    } else {
        console.log(`${kata} ini bukan palindrome`);
    }
}
console.log(cekPalindrome("A man, a plan, a canal, Panama"));
console.log(cekPalindrome("ayam"));

// 7. hitung pangkat
function hitungPangkat(angka, pangkat){
    return Math.pow(angka, pangkat); //cara simplenya
}
console.log(hitungPangkat(3, 5));
//cara panjangnya
// return new Array(pangkat).fill().reduce()

//8. cari bilangan fibonacci
function fibonacci(n) {
    let num = [0,1];
    for(let i = 2; i < n; i++){
        num.push(num[i - 1] + num[i - 2]);
    }
    return num;
}
console.log(fibonacci(8))
function fibonacciSeries(n) {
    let series = [0, 1];

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

console.log(fibonacciSeries(8)); 

// 9. Hitung Jumlah Kata
function hitungJumlahKata(kalimat) {
    let trimInput = kalimat.trim().split(/\s+/);
    // let kata = trimInput.split(/\s+/), jadi tidak perlu pakai 2 variabel cukup 1 variabel dengan 2 method
    return trimInput.length;
}
console.log(hitungJumlahKata('saya mau makan'));
console.log(hitungJumlahKata('saya mau makan ayam'));

// 10. cari bilangan terbesar
function cariBilanganTerbesar(arr){
    if(arr.length === 0){
        return;
    }
    let num = Math.max(...arr)
    return num;
}
console.log(cariBilanganTerbesar([2, 80, 202, 40, 67, 400, 899, 6, 8, 0]))

// 11. Hitung Rata-rata
function hitungRataRata(rrata){
    let rata = 0;
    for(let i = 0; i < rrata.length; i++){
        rata += rrata[i];
    }
    let hasil = rata / rrata.length;
    return hasil
}
console.log(hitungRataRata([1, 2, 3, 4, 5]));

// 12 menghitung jumlah Vokal
function jumlahKata(vokal){
    let kata1 = 0;
    const kata2 = ["a", "i", "u", "e", "o"];
    for(let i = 0; i < vokal.length; i++){
        if(kata2.includes(vokal[i].toLowerCase())){
            kata1++;
        }
    }
    return kata1;
}
console.log(jumlahKata("javascript"));

// 13 cari faktor bilangan
function cariFaktorBilangan(angka) {
    let faktor = []; 
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) { 
            faktor.push(i);
        }
    }

    return faktor;
}
console.log(cariFaktorBilangan(12));

//14 menghitung konversi suhu
function konversiSuhu(suhu, jenis) {
    if (jenis === "C") {
      return suhu * 9 / 5 + 32;
    } else if (jenis === "F") {
      return (suhu - 32) * 5 / 9;
    } else {
      return "Jenis suhu tidak dikenal";
    }
  }
  console.log(konversiSuhu(30, "C"));
  console.log(konversiSuhu(86, "F")); 

  // 15 karakter unik bisa pakai new set dan add()
  function hitungKarakterUnik(str) {
    const karakterUnik = new Set();
    for (const karakter of str) {
      karakterUnik.add(karakter);
    }
    return karakterUnik.size;
  }
  console.log(hitungKarakterUnik("hello world"));
  
  function hitungKarakter(str){
    return str
    .split
    .filter(function (item, i, ar) {
        console.log(item, "");

        return ar.indexOf(item) === i;
    })
    .join("").length;
  }
  
//16 kemunculan kata
function hitungKemunculanKata(kalimat, kata) {
    const regex = new RegExp(`\\b${kata}\\b`, 'gi');
    const hasil = kalimat.match(regex);
    return hasil ? hasil.length : 0;
    //return kalimat.split(kata).length - 1; //bisa juga pakai cara ini

    //cara by coach
    // let kataPanjang = kata.length;
    // returm kalimat.split("").reduce((jumlah, _, i) => {
    //     return kalimat.slice(i, i + kataPanjang) === kata ? jumlah + 1 : jumlah;
    // }, 0);
  }

  console.log(hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka"));


//17 cariBilanganGanjilTerbesar
function cariBilanganGanjilTerbesar(arr) {
    return Math.max(...arr.filter(num => num % 2 !== 0));
  }
  console.log(cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//18
function hitungJumlahDigitGenap(angka) {
    return [...angka.toString()].filter(digit => digit % 2 === 0).length;
  }
  console.log(hitungJumlahDigitGenap(1234567890));

//19 cek anagram
function cekAnagram(kata1, kata2) {
    const sortedKata1 = kata1.split('').sort().join('');
    const sortedKata2 = kata2.split('').sort().join('');
    return sortedKata1 === sortedKata2;
  }
  console.log(cekAnagram("listen", "silent")); // Output: true
  console.log(cekAnagram("hello", "world"));   // Output: false

//20 hitung huruf kapital
function hitungHurufKapital(kalimat) {
    return [...kalimat].filter(huruf => huruf === huruf.toUpperCase() && huruf !== ' ').length;
  }
  
  console.log(hitungHurufKapital("Saya Belajar JavaScript Di DICODING")); // Output: 13

// 21 cari bilangan hilang
function cariBilanganHilang(arr) {
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const sumArr = arr.reduce((acc, num) => acc + num, 0);
    return total - sumArr;
  }
  
  console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7])); // Output: 4

// 22 hitung kata unik
function hitungKataUnik(kalimat) {
    const kataArray = kalimat.split(' ');
    const kataUnik = new Set(kataArray);
    return kataUnik.size;
  }
  console.log(hitungKataUnik("Saya suka makan nasi suka minum air")); // Output: 6

// 23 kata unik
function hitungKataUnik(kalimat) {
    return new Set(kalimat.split(' ')).size;
  }
  console.log(hitungKataUnik("Saya suka makan nasi suka minum air")); // Output: 6

// 24 bilangan muncul sekali
function cariBilanganMunculSekali(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
  }
  console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5])); // Output: [1, 4]

//25 kemunculan karakter
function hitungKemunculanKarakter(str) {
    const hasil = {};
    for (const char of str) {
      hasil[char] = (hasil[char] || 0) + 1;
    }
    return hasil;
  }

  console.log(hitungKemunculanKarakter("hello world")); 

//26 hitung kombinasi
function hitungKombinasi(n, r) {
    function faktorial(x) {
      if (x === 0 || x === 1) return 1;
      return x * faktorial(x - 1);
    }
    
    return faktorial(n) / (faktorial(r) * faktorial(n - r));
  }
  console.log(hitungKombinasi(5, 2));
  console.log(hitungKombinasi(10, 3));
  
  
  
  
  