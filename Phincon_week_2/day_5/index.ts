//cara run typescript lewat terminal => tsc index.js => node index.js
export{} // biar gak ada merahnya
let test: string = "test"
test = "hello";
console.log(test);

//ada readonly jadi, push tidak bisa di jalankan.
let names: readonly string[] = ["andy"];
// names.push("danti");
// names.push("david");
console.log(names);

type Status = string[];
let setStatus = (a: Status) => {
    return a;
}

console.log(setStatus(['test']));

type systemMessage = 
    | {
        kind: "ABORT", jobId: number, reaseon: string,
    } 
    | {
        kind: "ABORT", jobId: number, reaseon: string,
    }

const processMessage = (msg: systemMessage) => {
    return msg.kind;
}

console.log(
    processMessage
)