const lampu = document.getElementById("lampu");
const onOff = document.getElementById("power");
let lampuM = 0;
onOff.addEventListener("click", () => {
    // console.log(lampu.src);
    if(lampuM == 0){
        lampu.src="lampu-nyala.png";
        lampuM = 1;
        console.log(lampuM)
    }else if(lampuM == 1){
        lampuM = 0;
        console.log(lampuM)
        lampu.src="lampu-mati.png";
    }
})
