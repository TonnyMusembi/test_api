const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");


const app = express();



app.use(express.json());

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`);
});