//ini function mendapatkan gambar dari poke API dan create elemen

// function poke(){
//     let img = document.createElement("img");
//     // console.log(img)
//     img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
//     let container = document.getElementById('container');
//     container.append(img)
// }
// poke()

//==================================================

// //variabel global mengambil poke API
// const BASE_URL = "https://pokeapi.co/api/v2"

// //mendefinisikan fungsi async fetchGet, di gunakan untuk mengambil data dari url yang di berikan.
// const fetchGet = async (url) => {
//     const response = await fetch(url); // digunakan untuk mengirim HTTP ke API menggunakan fetch() dan await menenunggu respon dari server sebelum lanjut ke baris berikutnya
//     const json = await response.json(); //setelah dapet respon dari API, lalu mengubah ke format JSON
//     return json; // hasil json di kembalikan oleh funct.
// }

// //di bawah ini async function untuk mendapatkan url
// async function getPokemon(url) {
//     const responseGetPokemons = await fetch(url + '/pokemon') ; //variabel mendapatkan respon poke api
//     //menggunakan fetch untuk mengambil daftar pokemon dari poke api, url yang dikirim gabungan dari BASE_URL
//     const pokemons = await responseGetPokemons.json(); //mengkonvert dari format respon ke format json, mengambil dari variabel responseGetPokemons, hasilnya di simpan ke variabel pokemons
//     pokemons.results.forEach(async (pokemon) => { 
//         await fetchGet(pokemon.url)
//     });
//     console.log(pokemons);
// }
// getPokemon(BASE_URL)

// const BASE_URL = 'https://pokeapi.co/api/v2';
// const fetchGet = async (url) => {
//     const fetc = await fetch(url);
//     const json = await fetc.json();
//     return json;
// }

// async function getPokemon(url) {
//     const responseGetPokemons = await fetch(url + '/pokemon');
//     const jsonPokemon = await responseGetPokemons.json();
//     jsonPokemon.results.forEach(async (pokemon) => {
//         const pokemonImg = await fetchGet(pokemon.url);
//         console.log(pokemonImg);
//     });
// }
// getPokemon(BASE_URL)