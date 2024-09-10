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
    if(tahun % 4 === 0){
        if(tahun % 100 === 0){
            if(tahun % 400 === 0){
                return true;
            }else {
                return false;
            }
    }else {
        return true;
    }
    }else {
        return false;
    }
}
console.log(cekTahunkabisat(2024));

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

// 5. Hitung Jumlah Digit
function hitungJumlahDigit(angka) {
    const angkaStr = angka.toString();
    let jumlah = 0;
    for(let i = 0; i < angkaStr.length; i++){
        jumlah += parseInt(angkaStr[i], 10)
    }
    return jumlah;
}
console.log(hitungJumlahDigit(5));

// 6. Cek palindrome
function cekPalindrome(kata) {
    for(let i = palindrom.length; i > 0; i--){
        if(palindrome[i] = palindrome.charAt(palindrome.length)-1){
            return ("palindrome");
        }else{
            return ("not palindrome");
        }
    }
    return kata == kata.split('').reverse().join('');
}
console.log(kata(buku));

// 7. hitung pangkat
function hitungPangkat(angka, pangkat){
    return Math.pow(angka, pangkat);
}
console.log(hitungPangkat(3, 5));