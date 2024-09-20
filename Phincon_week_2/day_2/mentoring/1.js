// let data = ['a', 'b', 'c'];
// //destrutering di pakai di react, terhadap object,array
// //destructering
// let [data1, data2, data3] = data;

//object
// let obj = {
//     name: "danti",
//     gender: "female",
// }
// let {name, gender} = obj;
// console.log(name);
// console.log(gender);

//ada function di dalam object
let obj1 = {
    aku: "dhanty",
    course: "fullstackJS",
    panggil: (action) => {
        return "aku belajar fullstack JS" + action
    },
    masukKelas: () => {
        return{
            a: "b",
        // return["fullstack", "IOS", "Andorid"]
        class: ["fullstack", "IOS", "Andorid"],
        }
    }
};
// console.log(obj1);
// console.log(obj1.panggil("di phincon academy"));
// console.log(obj1.masukKelas());
console.log(obj1.masukKelas().a);
// console.log(obj1.masukKelas()[0]);

// function myFunction() {
//     return this;
// }
// console.log(myFunction())




