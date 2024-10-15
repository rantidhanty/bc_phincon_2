require('dotenv').config();
require('module-alias/register');

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000;

const authRoutes = require('@/routes/auth');
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.status(200).send("test");
})
app.use('/auth', authRoutes)

app.listen(port, ()=> {
    console.log(`Server listen on port ${port}`)
});
