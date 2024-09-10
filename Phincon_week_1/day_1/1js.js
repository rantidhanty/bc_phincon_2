const dataHandling = (data) => {
    // console.log(data[0][0]);
    // console.log(data[0][1]);
    // console.log(data[0][3]);
    // console.log(data[3][2]);
    // console.log(data[1][2]);
    const No_ID = document.getElementById("noID");
    const namaLengkap = document.getElementById("namaLengkap");
    const TTL = document.getElementById("TTL");
    const hobi =  document.getElementById("hobi");

    // No_ID.textContent = "nomer ID : " + data[0][0];
    // namaLengkap.textContent = "Nama Lengkap : " + data[0][1];
    // TTL.textContent = "Tempat Tanggal Lahir : " + data[0][2] + ", " + data[0][3];
    // hobi.textContent = "Hobby : " + data[0][4];

    // No_ID.textContent = "nomer ID : " + data[1][0];
    // namaLengkap.textContent = "Nama Lengkap : " + data[1][1];
    // TTL.textContent = "Tempat Tanggal Lahir : " + data[1][2] + ", " + data[1][3];
    // hobi.textContent = "Hobby : " + data[1][4];

    // No_ID.textContent = "nomer ID : " + data[2][0];
    // namaLengkap.textContent = "Nama Lengkap : " + data[2][1];
    // TTL.textContent = "Tempat Tanggal Lahir : " + data[2][2] + ", " + data[2][3];
    // hobi.textContent = "Hobby : " + data[2][4];

    // No_ID.textContent = "nomer ID : " + data[3][0];
    // namaLengkap.textContent = "Nama Lengkap : " + data[3][1];
    // TTL.textContent = "Tempat Tanggal Lahir : " + data[3][2] + ", " + data[3][3];
    // hobi.textContent = "Hobby : " + data[3][4];

    const body = document.getElementsByTagName("body")[0];
    console.log(body)
    for(inputs of input){
        console.log(inputs);
        for(const [index, input2] of inputs.entries()){
            console.log(input2);
            const div = document.createElement("div")
            // console.log(id);
            
            console.log(index)
            if(index == 0){
                div.textContent = "Nomer ID : "  + input2;
            }else if(index == 1){
                div.textContent = "Nama Lengkap : "  + input2;
            }else if(index == 2){
                div.textContent = "Tempat Tanggal lahir : "  + inputs[2] + ", " + inputs[3];
            }else if(index == 4){
                div.textContent = "Hobby : "  + input2;
            }
            body.append(div)
        }
    }
}
const input = [
    ["0001", "roman s", "bandar lampung", "26/5/87", "Membaca"],
    ["0002", "dika s", "jakarta", "15/4/96", "Menulis"],
    ["0003", "winona", "bandung", "16/3/90", "Memasak"],
    ["0004", "bintang", "surabaya", "23/9/88", "Berkebun"]
]
dataHandling(input)

