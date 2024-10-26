const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;
const router = require("./routes/auth");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", router);

app.listen(port, () => {
  console.log(`server running ${port}`);
});
