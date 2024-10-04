const express = require("express");
const router = express.Router();

const students = [
    {id: 1, name: "fauzan"},
    {id: 2, name: "fauzan"},
    {id: 3, name: "fauzan"}
]

router.get("/", (req, res) => {
    res.send(students);
});
router
