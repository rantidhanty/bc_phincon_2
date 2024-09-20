// function display(poke) {
//     let img = document.createElement('img');
//     img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
//     let container = document.getElementById("container");
//     container.append(img);
//     // console.log(container)
// }
// display()



// let promise = new Promise(function(Resolve, Rejected){
//     let req = new XMLHttpRequest();
//     req.open('GET', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
//     req.onload = function(){
//         if (req.status === 200) {
//             Resolve(req.response);
//         } else {
//             Rejected("no file");
//         }
//     };
//     req.send();
// });

// promise.then(
//     function(value) {display(value);},
//     function(error) {display(error);}
// );


// const container = document.getElementById("container");
// let div = document.createElement("div");
// // console.log(div);
// div.className = "pokemon";
// div.textContent = 1;
// container.append(div);
// // console.log(div);
// for (let i = 1; i <= 10; i++){
//     let div = document.createElement("div");
//     div.className = "pokemon";
//     div.textContent = `pokemon no: ${i}`;
//     container.append(div);
// }

