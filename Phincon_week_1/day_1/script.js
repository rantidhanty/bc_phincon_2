
// document.addEventListener("DOMContentLoaded", function() {
//     const table = document.getElementById("data-bootcamp").getElementsByTagName("tbody")[0];
//     const newRow = document.createElement('tr');
//     const cell1 = document.createElement('td');
//     const cell2 = document.createElement('td');
//     const cell3 = document.createElement('td');
//     const cell4 = document.createElement('td');
//     const cell5 = document.createElement('td');

//     const rowCount = table.rows.length + 1;
//     cell1.textContent = rowCount;
//     cell2.textContent = "Data Sciente";
//     cell3.textContent = "Lita";
//     cell4.textContent = "DS";
//     cell5.textContent = "5";

//     cell1.textContent = rowCount;
//     cell2.textContent = "Devops";
//     cell3.textContent = "Muto";
//     cell4.textContent = "DEVOPS";
//     cell5.textContent = "10";

//     newRow.appendChild(cell1);
//     newRow.appendChild(cell2);
//     newRow.appendChild(cell3);
//     newRow.appendChild(cell4);
//     newRow.appendChild(cell5);

//     table.appendChild(newRow);
// });
const bandingkanAngka = (angka1, angka2) => {
    if(angka2 > angka1){
        return true;
    }else if(angka2 < angka1){
        return false;
    }else {
        return -1;
    }
}
console.log(bandingkanAngka(5, 6));

const balikKata = (kata) => {
    return kata.split('').reverse().join('');
}
console.log(balikKata('john dea'));