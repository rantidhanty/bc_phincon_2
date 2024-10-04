require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const exercise = require("./routes/exercise");

app.use("/produk", exercise);
app.use

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send("mengkonsyum API")
// });

// const students = [
//     {id: 1, name: "fauzan"},
//     {id: 2, name: "fauzan"},
//     {id: 3, name: "fauzan"}
// ]

// function getStudent(student){
//     return student.id === 1;
// }

// console.log(students.find(student => student.id === 1))

// app.get("/api/:id", (req,res) => {
//     const id = req.params;
//     console.log("test")
//     // res.send(id);
//     res.send(`Halo ${id}`);
// });

// app.get('/user', (req, res) => {
//     const {name, kelas, address} = req.query;
//     const greeting = `Selamat pagi ${name} ada ${address}, selamat datang di kelas ${kelas}`
//     res.send(greeting);
//     // console.log(req.query);
//     // req.send(req.query);
// })

// //middleware
// const middleware = (req, res, next) => {
//     console.log("MIddleware berjalan");
//     next();
// }

// app.get("/profile", middleware, (req, res) => {
//     res.send("AKSES HALAMAN PROFIL");
// });

// app.post('/calculation', (req,res) => {
//     const {numberOne, operator, numberTwo} = req.body;
//     let result;
//     if(operator === "*"){
//         result = numberOne * numberTwo;
//     }else if(operator === "/"){
//         result = numberOne / numberTwo;
//     }else if(operator === "+"){
//         result = numberOne + numberTwo;
//     }else if(operator === "-"){
//         result = numberOne - numberTwo;
//     }else{
//         result = "operator not found 404"
//     }
//     console.log("test")
//     res.send({
//         numberOne : numberOne,
//         operator: operator,
//         numberTwo : numberTwo,
//         ouput: result,
//     });
// });

app.listen(port, () => {
    console.log("Server listen on " + port);
});